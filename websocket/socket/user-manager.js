const redis = required("../chat/redis/config/redis.config");

async function addConnection(socket) {
	const socketId = socket.id;
	const email = socket.data.email;

	await redis.sadd(`user:${email}:connections`, socketId);
	console.log(`User ${email} has established connection ${socketId}`);
}

async function removeConnection(socket) {
	const socketId = socket.id;
	const email = socket.data.email;

	await redis.srem(`user:${email}:connections`, socketId);
	console.log(`User ${email} has broken connection ${socketId}.`);
}

async function getConnections(email) {
	return await redis.smembers(`user:${email}:connections`);
}

module.exports = {
	addConnection,
	removeConnection,
	getConnections,
};
