const { redis } = require("../database/redis/config/redis.config");

async function verifyChatroom(req, res, next) {
	try {
		const chatroomId = req.params.id;

		const chatroom = await redis.hgetall(`chatroom:${chatroomId}`);
		if (!chatroom || Object.keys(chatroom).length === 0) {
			return res.status(404).json({ message: "Chatroom not found" });
		}

		next();
	} catch (error) {
		console.error("Unexpected error: ", error);
		res.status(500).json({
			message: "Internal server error",
		});
	}
}

async function verifyUserBelongsToChatroom(req, res, next) {
	try {
		const chatroomId = req.params.id;
		const email = req.email;
		const isMember = await redis.sismember(
			`chatroom:${chatroomId}:participants`,
			email
		);
		if (!isMember) {
			return res
				.status(403)
				.json({ message: "User does not belong in chatroom" });
		}
		next();
	} catch (error) {
		console.error("Unexpected error: ", error);
		res.status(500).json({
			message: "Internal server error",
		});
	}
}

async function verifyMessage(req, res, next) {
	try {
		const { message } = req.body;
		if (typeof message !== "string") {
			return res.status(400).json({ message: "Invalid message content" });
		}

		next();
	} catch (error) {
		console.error("Unexpected error: ", error);
		res.status(500).json({
			message: "Internal server error",
		});
	}
}

module.exports = { verifyChatroom, verifyUserBelongsToChatroom, verifyMessage };
