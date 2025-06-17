const express = require("express");
const router = express.Router();
const {
	verifyToken,
	checkTokenEmail,
} = require("../middleware/keycloak-api-auth");
const { verifyParticipants } = require("../middleware/keycloak-users");
const { redis } = require("../database/redis/config/redis.config");

function createChatName(users) {
	const names = users.map((u) => u.first_name);

	if (names.length === 0) return "";
	if (names.length === 1) return names[0];
	if (names.length === 2) return names.join(" and ");
	return names.slice(0, -1).join(", ") + " and " + names[names.length - 1];
}

router.post(
	"/",
	verifyToken,
	checkTokenEmail,
	verifyParticipants,
	async (req, res) => {
		try {
			const participantEmails = req.body;
			const users = req.users;
			const chatroomId = await redis.incr("chatroom:next_id");
			const chatroomName = createChatName(users);

			const chatroom = {
				id: chatroomId,
				name: chatroomName,
				participants: participantEmails,
			};

			await redis.set(`chatroom:${chatroomId}`, JSON.stringify(chatroom));
			res.status(201).json({
				message: "Chatroom created successfully",
				chatroom,
			});
		} catch (error) {
			res.status(500).json({
				code: "Internal server error",
				error: error,
			});
		}
	}
);
