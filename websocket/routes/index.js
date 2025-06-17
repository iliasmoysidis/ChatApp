const chatRoutes = require("./chat.routes");
const userRoutes = require("./user.routes");

function setupRoutes(app) {
	app.use("/api/chats", chatRoutes);
	app.use("/api/users", userRoutes);
}

module.exports = { setupRoutes };
