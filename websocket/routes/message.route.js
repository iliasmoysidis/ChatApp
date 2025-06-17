const express = require("express");
const router = express.Router();
const {
	verifyToken,
	checkTokenEmail,
} = require("../middleware/keycloak-api-auth");
const {
	verifyChatroom,
	verifyMessage,
} = require("../middleware/redis-chatroom");
const { redis } = require("../database/redis/config/redis.config");

router.post(
	"/:id",
	verifyToken,
	checkTokenEmail,
	verifyChatroom,
	verifyMessage,
	async (req, res) => {
		try {
			const { message } = req.body;
			const chatroomId = req.params.id;
			const sender = req.email;

			const messageObj = {
				sender,
				message: message.trim(),
				timestamp: Date.now(),
			};

			await redis.rpush(
				`chatroom:${chatroomId}:messages`,
				JSON.stringify(messageObj)
			);
			return res.status(201).json({ message: "Message sent" });
		} catch (error) {
			console.error("Unexpected error: ", error);
			res.status(500).json({
				message: "Internal server error",
			});
		}
	}
);
