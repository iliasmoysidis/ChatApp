const express = require("express");
const router = express.Router();
const {
	verifyToken,
	checkTokenEmail,
} = require("../middleware/keycloak-api-auth");
const { verifyParticipants } = require("../middleware/keycloak-users");
const { redis } = require("../database/redis/config/redis.config");
const { verifyChatroom } = require("../middleware/redis-chatroom");

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

			await redis.hset(
				`chatroom:${chatroomId}`,
				"id",
				chatroomId,
				"name",
				chatroomName,
				"participants",
				JSON.stringify(participantEmails),
				"created_at",
				Date.now()
			);

			const pipeline = redis.pipeline();
			participantEmails.forEach((email) => {
				pipeline.sadd(`chatroom:${chatroomId}:participants`, email);
				pipeline.sadd(`user:${email}:chatrooms`, chatroomId);
			});
			await pipeline.exec();

			console.log("Chatroom created successfully");
			res.status(201).json({
				message: "Chatroom created successfully",
				chatroom,
			});
		} catch (error) {
			console.error("Unexpected error: ", error);
			res.status(500).json({
				message: "Internal server error",
			});
		}
	}
);

router.get("/", verifyToken, checkTokenEmail, async (req, res) => {
	try {
		const email = req.email;
		const chatroomIds = await redis.smembers(`user:${email}:chatrooms`);
		console.log(chatroomIds);
		if (chatroomIds.length === 0) {
			return res.status(200).json({ chatrooms: [] });
		}

		const pipeline = redis.pipeline();
		chatroomIds.forEach((id) => {
			pipeline.hgetall(`chatroom:${id}`);
		});
		const results = await pipeline.exec();

		const chatrooms = results
			.map(([err, data]) => {
				if (err) return null;
				if (data.participants) {
					try {
						data.participants = JSON.parse(data.participants);
					} catch (_) {
						data.participants = [];
					}
				}
				data.created_at = Number(data.created_at || 0);
				return data;
			})
			.filter(Boolean)
			.sort((a, b) => b.created_at - a.created_at);

		res.status(200).json({ chatrooms: chatrooms });
	} catch (error) {
		console.error("Unexpected error: ", error);
		res.status(500).json({
			message: "Internal server error",
		});
	}
});

router.delete(
	"/:id",
	verifyToken,
	checkTokenEmail,
	verifyChatroom,
	async (req, res) => {
		try {
			const email = req.email;
			const chatroomId = req.params.id;

			await redis.srem(`chatroom:${chatroomId}:participants`, email);
			await redis.srem(`user:${email}:chatrooms`, chatroomId);

			const participantSet = await redis.smembers(
				`chatroom:${chatroomId}:participants`
			);
			await redis.hset(
				`chatroom:${chatroomId}`,
				"participants",
				JSON.stringify(participantSet)
			);

			if (participantSet.length === 0) {
				await redis.del(`chatroom:${chatroomId}`);
				await redis.del(`chatroom:${chatroomId}:participants`);
			}

			res.status(200).json({
				message: `User ${email} removed from chatroom ${chatroomId}`,
			});
		} catch (error) {
			console.error("Unexpected error: ", error);
			res.status(500).json({
				message: "Internal server error",
			});
		}
	}
);

module.exports = router;
