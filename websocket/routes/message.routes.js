const express = require("express");
const router = express.Router();
const {
	verifyToken,
	checkTokenEmail,
} = require("../middleware/keycloak-api-auth");
const {
	verifyChatroom,
	verifyUserBelongsToChatroom,
	verifyMessage,
} = require("../middleware/redis-chatroom");
const { redis } = require("../database/redis/config/redis.config");
const io = require("../socket/index");

router.post(
	"/:id",
	verifyToken,
	checkTokenEmail,
	verifyChatroom,
	verifyUserBelongsToChatroom,
	verifyMessage,
	async (req, res) => {
		try {
			const { message } = req.body;
			const chatroomId = req.params.id;

			const messageObj = {
				type: "text",
				text: message.trim(),
				reply: null,
				date: Date.now().toISOString(),
				user: {
					name: req.user.name,
					email: req.email,
				},
			};

			await redis.rpush(
				`chatroom:${chatroomId}:messages`,
				JSON.stringify(messageObj)
			);

			io.to(`chatroom:${chatroomId}`).emit("newMessage", messageObj);
			return res.status(201).json({ message: "Message sent" });
		} catch (error) {
			console.error("Unexpected error: ", error);
			res.status(500).json({
				message: "Internal server error",
			});
		}
	}
);

router.get(
	"/:id",
	verifyToken,
	checkTokenEmail,
	verifyChatroom,
	async (req, res) => {
		try {
			const chatroomId = req.params.id;
			const rawMessages = await redis.lrange(
				`chatroom:${chatroomId}:messages`,
				0,
				-1
			);
			const messages = rawMessages.map(JSON.parse);
			return res.status(200).json(messages);
		} catch (error) {
			console.error("Unexpected error: ", error);
			res.status(500).json({
				message: "Internal server error",
			});
		}
	}
);

module.exports = router;
