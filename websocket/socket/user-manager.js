let connections = [];

function addConnection(socket) {
	const socketId = socket.id;
	const email = socket.data.email;

	connections.push({ email: email, socketId: socketId });

	console.log(`User ${email} has established connection ${socketId}`);
}

function removeConnection(socket) {
	const socketId = socket.id;
	const email = socket.data.email;

	connections = connections.filter(
		(connection) => connection.socketId !== socketId
	);

	console.log(`User ${email} has broken connection ${socketId}.`);
}

module.exports = {
	get connections() {
		return connections;
	},
	addConnection,
	removeConnection,
};
