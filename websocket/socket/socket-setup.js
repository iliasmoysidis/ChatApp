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

		socket.on("joinChatroom", async (chatroomId) => {
			const isMember = await redis.sismember(
				`chatroom:${chatroomId}:participants`,
				socket.data.email
			);

			if (!isMember) {
				console.log(
					`Unauthorized join attempt: ${socket.data.email} to chatroom ${chatroomId}`
				);
				return socket.emit("error", "Unauthorized");
			}

			socket.join(`chatroom:${chatroomId}`);
			console.log(
				`User ${socket.data.email} joined chatroom:${chatroomId}`
			);
		});

		socket.on("leaveChatroom", (chatroomId) => {
			socket.leave(`chatroom:${chatroomId}`);
			console.log(
				`User ${socket.data.email} left chatroom:${chatroomId}`
			);
		});

		socket.on("disconnect", () => {
			removeConnection(socket);
		});
	});
}

module.exports = { setupSocket };
