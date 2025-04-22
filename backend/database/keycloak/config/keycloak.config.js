const { Client } = require("pg");

const client = new Client({
	user: process.env.POSTGRES_USERNAME,
	host: process.env.POSTGRES_HOST,
	database: process.env.POSTGRES_DATABASE,
	password: process.env.POSTGRES_PASSWORD,
	port: process.env.POSTGRES_PORT,
});

client
	.connect()
	.then(() => console.log("PostgreSQL connected successfully"))
	.catch((err) => console.error("PostgreSQL connection failed:", err));

module.exports = { client };
