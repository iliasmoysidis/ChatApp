const socketIO = require("socket.io");
const { setupSocket } = require("./socket-setup");

let io = null;

function initSocket(server) {
	io = socketIO(server, {
		cors: {
			origin: ["https://chatapp.it.com"],
			methods: ["GET", "POST"],
			credentials: true,
		},
	});
	setupSocket(io);

	return io;
}

function getIO() {
	if (!io) {
		throw new Error("Socket.io not initialized");
	}
	return io;
}

module.exports = { initSocket, getIO };
