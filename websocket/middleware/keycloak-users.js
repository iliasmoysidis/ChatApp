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
			return res
				.status(400)
				.send("Participant emails (non-empty array) are required");
		}

		const uniqueIds = new Set(participantEmails);
		if (uniqueIds.size !== participantEmails.length) {
			return res
				.status(400)
				.send("Participant must be unique. Duplicate users found.");
		}

		const existingUsers = await keycloakModels.user_entity.findAll({
			where: {
				email: {
					[Op.in]: participantEmails,
				},
			},
		});
		if (existingUsers.length !== participantEmails.length) {
			return res.status(400).send("Some users do not exist");
		}

		next();
	} catch (error) {
		return res.status(500).send("Internal server error");
	}
}

module.exports = { verifyParticipants };
