const express = require("express");
const router = express.Router();
const {
	verifyToken,
	checkTokenEmail,
} = require("../middleware/keycloak-api-auth");
const { verifyParticipants } = require("../middleware/keycloak-users");
const { keycloakModels } = require("../database/keycloak/models/index");

router.post(
	"/",
	verifyToken,
	checkTokenEmail,
	verifyParticipants,
	async (req, res) => {}
);
