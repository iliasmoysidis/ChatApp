const { keycloakModels } = require("../database/keycloak/models/index");
const { Op } = require("sequelize");

async function verifyParticipants(req, res, next) {
	try {
		const participantEmails = req.body;
		if (
			!participantEmails ||
			!Array.isArray(participantEmails) ||
			participantEmails.length == 0
		) {
			return res.status(400).json({
				message: "Participant emails (non-empty array) are required",
			});
		}

		const uniqueIds = new Set(participantEmails);
		if (uniqueIds.size !== participantEmails.length) {
			return res.status(400).json({
				message: "Duplicate users found",
			});
		}

		const existingUsers = await keycloakModels.user_entity.findAll({
			where: {
				email: {
					[Op.in]: participantEmails,
				},
			},
			attributes: ["email", "first_name", "last_name", "username"],
		});
		if (existingUsers.length !== participantEmails.length) {
			return res.status(400).json({
				message: "Some users do not exist",
			});
		}

		req.users = existingUsers;
		next();
	} catch (error) {
		console.error("Unexpected error: ", error);
		res.status(500).json({
			message: "Internal server error",
		});
	}
}

async function verifySearchString(req, res, next) {
	try {
		const searchString = req.query.searchString;
		if (!searchString) {
			return res
				.status(400)
				.json({ message: "Search string is required" });
		}
		next();
	} catch (error) {
		console.error("Unexpected error: ", error);
		res.status(500).json({
			message: "Internal server error",
		});
	}
}

module.exports = { verifyParticipants, verifySearchString };
