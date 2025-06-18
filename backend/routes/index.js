const chatRoutes = require("./chat.routes");
const userRoutes = require("./user.routes");
const messageRoutes = require("./message.routes");

function setupRoutes(app) {
	app.use("/api/chats", chatRoutes);
	app.use("/api/users", userRoutes);
	app.use("/api/messages", messageRoutes);
}

module.exports = { setupRoutes };
