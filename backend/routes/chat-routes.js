const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/api-auth");
const { chatModels } = require("../database/chat/models/index");
const { chatSequelize } = require("../database/chat/config/sequelize.config");
const { keycloakModels } = require("../database/keycloak/models");
const { Op } = require("sequelize");

function createChatName(users) {
	const names = users.map((u) => u.first_name);

	if (names.length === 0) return "";
	if (names.length === 1) return names[0];
	if (names.length === 2) return names.join(" and ");
	return names.slice(0, -1).join(", ") + " and " + names[names.length - 1];
}

router.post("/", verifyToken, async (req, res) => {
	try {
		const transaction = await chatSequelize.transaction();
		const participantEmails = req.body;
		const existingUsers = await keycloakModels.user_entity.findAll({
			where: { email: participantEmails },
		});
		const uniqueIds = new Set(participantEmails);
		const sortedUniqueIds = Array.from(uniqueIds).sort();

		if (
			!participantEmails ||
			!Array.isArray(participantEmails) ||
			participantEmails.length === 0
		) {
			return res.status(400).json({
				error: "Participant emails (non-empty array) are required",
			});
		}

		if (existingUsers.length !== participantEmails.length) {
			return res
				.status(400)
				.json({ error: "Some participant emails do not exist" });
		}

		if (uniqueIds.size !== participantEmails.length) {
			return res.status(400).json({
				error: "Participant emails must be unique. Duplicate emails found.",
			});
		}

		// 1. Find all chats that any of these participants belong to
		const matchingParticipants = await chatModels.chat_participant.findAll({
			where: {
				user_id: sortedUniqueIds,
			},
			attributes: ["chat_id", "user_id"],
		});

		// 2. Group users by chat_id
		const chatGroups = {};
		matchingParticipants.forEach(({ chat_id, user_id }) => {
			if (!chatGroups[chat_id]) chatGroups[chat_id] = new Set();
			chatGroups[chat_id].add(user_id);
		});

		// 3. Check for an exact match
		for (const [chatId, userSet] of Object.entries(chatGroups)) {
			const sortedUsers = Array.from(userSet).sort();
			if (
				sortedUsers.length === sortedUniqueIds.length &&
				sortedUsers.every((id, i) => id === sortedUniqueIds[i])
			) {
				return res.status(200).json({
					id: Number(chatId),
					participants: sortedUsers,
				});
			}
		}

		// 4. No exact match found, create new chat and participants
		const chat = await chatModels.chat.create({}, { transaction });

		const participantRows = participantEmails.map((email) => ({
			chat_id: chat.id,
			user_id: email,
		}));

		await chatModels.chat_participant.bulkCreate(participantRows, {
			transaction,
		});

		await transaction.commit();

		res.status(201).json({ id: chat.id, participants: participantEmails });
	} catch (error) {
		await transaction.rollback();
		console.error("Error creating or fetching chat:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

router.get("/", verifyToken, async (req, res) => {
	try {
		const email = req.user.email;

		// Step 1: Get chat_ids the user is in
		const participantRecords = await chatModels.chat_participant.findAll({
			where: { user_id: email },
			attributes: ["chat_id"],
		});
		const chatIds = participantRecords.map((p) => p.chat_id);

		if (chatIds.length === 0) {
			return res.status(200).json({ chats: [] });
		}

		// Step 2: Get all participants in those chats
		const allParticipants = await chatModels.chat_participant.findAll({
			where: { chat_id: { [Op.in]: chatIds } },
			attributes: ["chat_id", "user_id"],
		});

		// Step 3: Group user_ids by chat_id
		const chatMap = {};
		const userIds = new Set();

		allParticipants.forEach(({ chat_id, user_id }) => {
			if (!chatMap[chat_id]) {
				chatMap[chat_id] = {
					id: chat_id,
					users: [],
				};
			}
			chatMap[chat_id].users.push(user_id);
			userIds.add(user_id);
		});

		// Step 4: Fetch user data from Keycloak DB
		const users = await keycloakModels.user_entity.findAll({
			where: {
				email: {
					[Op.in]: Array.from(userIds),
				},
			},
			attributes: ["email", "first_name", "last_name", "username"],
		});

		// Step 5: Map users by email, and add `name`
		const userMap = {};
		users.forEach((u) => {
			userMap[u.email] = {
				email: u.email,
				username: u.username,
				firstName: u.first_name,
				lastName: u.last_name,
				name: `${u.first_name} ${u.last_name}`,
			};
		});

		// Step 6: Replace user_id with user object
		const result = Object.values(chatMap).map((chat) => ({
			id: chat.id,
			chatName: createChatName(
				chat.users
					.map((email) => userMap[email])
					.filter(Boolean)
					.map((u) => ({ first_name: u.firstName })) // map to expected structure
			),
			users: chat.users
				.map((email) => userMap[email] || null)
				.filter(Boolean),
		}));

		res.status(200).json({ chats: result });
	} catch (error) {
		console.error("Error fetching user chats:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

router.delete("/:id", verifyToken, async (req, res) => {
	try {
		const email = req.user.email;
		const id = req.params.id;

		const record = await chatModels.chat_participant.findOne({
			where: {
				chat_id: id,
				user_id: email,
			},
		});

		if (!record) {
			return res.status(400).json({ error: "Chat not found" });
		}

		await record.destroy();
		res.status(200).json({ message: "Chat was successfully deleted" });
	} catch (error) {
		console.error("Error fetching user chats:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

module.exports = router;
