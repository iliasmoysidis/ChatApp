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
				code: "Invalid participants",
				message: "Participant emails (non-empty array) are required",
			});
		}

		const uniqueIds = new Set(participantEmails);
		if (uniqueIds.size !== participantEmails.length) {
			return res.status(400).json({
				code: "Duplicate participants",
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
				code: "Invalid users",
				message: "Some users do not exist",
			});
		}

		req.users = existingUsers;
		next();
	} catch (error) {
		res.status(500).json({
			code: "Internal server error",
			error: error,
		});
	}
}

module.exports = { verifyParticipants };
