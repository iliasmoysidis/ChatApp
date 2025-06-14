const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const verifyToken = require("../middleware/api-auth");
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

router.get("/filter", verifyToken, async (req, res) => {
	const searchString = req.query.searchString;

	if (!searchString) {
		return res.status(400).json({ error: "Search string is required" });
	}
	try {
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
		res.status(500).json({ error: "Internal server error" });
	}
});

router.get("/me", verifyToken, async (req, res) => {
	try {
		const decodedToken = req.decodedToken;
		console.log(decodedToken);
		res.status(200).json({ token: decodedToken });
	} catch (error) {
		console.log("Error fetching users:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

module.exports = router;
