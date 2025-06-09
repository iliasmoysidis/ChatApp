const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/api-auth");
const { chatModels } = require("../database/chat/models/index");
const { chatSequelize } = require("../database/chat/config/sequelize.config");

router.post("/", verifyToken, async (req, res) => {
	const participantIds = req.body;

	if (
		!participantIds ||
		!Array.isArray(participantIds) ||
		participantIds.length === 0
	) {
		return res
			.status(400)
			.json({ error: "participantIds (non-empty array) is required" });
	}

	const uniqueIds = new Set(participantIds);
	if (uniqueIds.size !== participantIds.length) {
		return res.status(400).json({
			error: "participantIds must be unique. Duplicate IDs found.",
		});
	}

	const transaction = await chatSequelize.transaction();

	try {
		const chat = await chatModels.chat.create({}, { transaction });

		const participantRows = participantIds.map((userId) => ({
			chat_id: chat.id,
			user_id: userId,
		}));

		await chatModels.chat_participant.bulkCreate(participantRows, {
			transaction,
			ignoreDuplicates: true,
		});

		await transaction.commit();

		res.status(201).json({ chatId: chat.id, participantIds });
	} catch (error) {
		await transaction.rollback();
		console.log("Error fetching users:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

module.exports = router;
