const { removeConnection, addConnection } = require("./user-manager");
const {
	verifyToken,
	checkTokenEmail,
} = require("../middleware/keycloak-websocket-auth");

function setupSocket(io) {
	io.use(verifyToken);
	io.use(checkTokenEmail);

	io.on("connect", (socket) => {
		addConnection(socket);
		socket.on("disconnect", () => {
			removeConnection(socket);
		});
	});
}

module.exports = { setupSocket };
