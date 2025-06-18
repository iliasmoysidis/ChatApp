const socketIO = require("socket.io");
const server = require("../server/index");
const { setupSocket } = require("./socket-setup");

const io = socketIO(server, {
	cors: {
		origin: "http://localhost:4200",
	},
});
setupSocket(io);

module.exports = io;
