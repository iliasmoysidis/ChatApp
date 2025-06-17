const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/keycloak-api-auth");
const { verifySearchString } = require("../middleware/keycloak-users");
const { Op } = require("sequelize");
const { keycloakModels } = require("../database/keycloak/models/index");
const {
	keycloakSequelize,
} = require("../database/keycloak/config/sequelize.config");

function createFilterCondition(searchString, fields) {
	return fields.map((field) => ({
		[field]: {
			[Op.iLike]: `%${searchString}%`,
		},
	}));
}

router.get("/filter", verifyToken, verifySearchString, async (req, res) => {
	try {
		const searchString = req.query.searchString;
		const fieldsToSearch = ["email", "username", "first_name", "last_name"];
		const searchQuery = {
			[Op.or]: createFilterCondition(searchString, fieldsToSearch),
		};
		const users = await keycloakModels.user_entity.findAll({
			where: searchQuery,
			attributes: [
				"id",
				"email",
				"username",
				[
					keycloakSequelize.literal(`first_name || ' ' || last_name`),
					"name",
				],
			],
		});
		res.status(200).json({ users: users });
	} catch (error) {
		console.log("Error fetching users:", error);
		res.status(500).json({ message: "Internal server error" });
	}
});

module.exports = router;
