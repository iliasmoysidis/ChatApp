const { Client } = require("pg");

const client = new Client({
	user: process.env.CHAT_DB_USERNAME,
	host: process.env.CHAT_DB_HOST,
	database: process.env.CHAT_DB_DATABASE,
	password: process.env.CHAT_DB_PASSWORD,
	port: process.env.CHAT_DB_PORT,
});

client
	.connect()
	.then(() => console.log("Chat-db connected successfully"))
	.catch((err) => console.error("PostgreSQL connection failed:", err));

module.exports = { client };
