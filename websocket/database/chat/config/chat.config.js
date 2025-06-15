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
	.then(() => console.log("✅ Chat-db connection established successfully."))
	.catch((err) => console.error("❌ Chat-db connection error:", err));

module.exports = { client };
