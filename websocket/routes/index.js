const chatRoutes = require("./chat.routes");

function setupRoutes(app) {
	app.use("/api/chats", chatRoutes);
}

module.exports = { setupRoutes };
