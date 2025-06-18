const socketIO = require("socket.io");
const { setupSocket } = require("./socket-setup");

function initSocket(server) {
	const io = socketIO(server, {
		cors: {
			origin: "http://localhost:4200",
		},
	});
	setupSocket(io);

	return io;
}

module.exports = { initSocket };
