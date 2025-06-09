const express = require("express");
const userRoutes = require("./user-routes");
const chatRoutes = require("./chat-routes");

function setupRoutes(app) {
	app.use("/api/users", userRoutes);
	app.use("/api/chats", chatRoutes);
}

module.exports = setupRoutes;
