const { verifyToken } = require("../middleware/keycloak-websocket-auth");

function setupSocket(io) {
	io.use(verifyToken);
	io.on("connect", (socket) => {
		console.log(`User ${socket.id} has connected`);
		socket.on("disconnect", () => {
			console.log(`User ${socket.id} has disconnected`);
		});
	});
}

module.exports = { setupSocket };
