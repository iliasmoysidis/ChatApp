const { removeConnection, addConnection } = require("./user-manager");
const {
	verifyToken,
	checkTokenEmail,
} = require("../middleware/keycloak-websocket-auth");

function setupSocket(io) {
	io.use(verifyToken);
	io.use(checkTokenEmail);

	io.on("connect", (socket) => {
		const email = socket.data.email;
		addConnection(socket);

		socket.on("joinChatroom", async (chatroomId) => {
			const isMember = await redis.sismember(
				`chatroom:${chatroomId}:participants`,
				email
			);

			if (!isMember) {
				console.log(
					`Unauthorized join attempt: ${email} to chatroom ${chatroomId}`
				);
				return socket.emit("error", "Unauthorized");
			}

			socket.join(`chatroom:${chatroomId}`);
			console.log(`User ${email} joined chatroom:${chatroomId}`);
		});

		socket.on("leaveChatroom", (chatroomId) => {
			socket.leave(`chatroom:${chatroomId}`);
			console.log(`User ${email} left chatroom:${chatroomId}`);
		});

		socket.on("disconnect", () => {
			removeConnection(socket);
		});
	});
}

module.exports = { setupSocket };
