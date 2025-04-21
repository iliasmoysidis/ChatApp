const express = require("express");
const router = express.Router();
const { Op, fn, col } = require("sequelize");
const verifyToken = require("../middleware/api-auth");
const user_entity = require("../models/user_entity");

function createFilterCondition(searchString, fields) {
	return fields.map((field) => ({
		[field]: {
			[Op.iLike]: `%${searchString}%`,
		},
	}));
}

router.get("/filterUsers", verifyToken, async (req, res) => {
	const searchString = req.query.searchString;

	if (!searchString) {
		return res.status(400).json({ error: "Search string is required" });
	}
	try {
		const fieldsToSearch = ["email", "username", "first_name", "last_name"];
		const searchQuery = {
			[Op.or]: createFilterCondition(searchString, fieldsToSearch),
		};
		const users = await user_entity.findAll({ where: searchQuery });
		res.status(200).json({ users: users });
	} catch (error) {
		console.log("Error fetching users:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

module.exports = router;
