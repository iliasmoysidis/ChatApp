const { Client } = require("pg");

const client = new Client({
	user: process.env.KEYCLOAK_DB_USERNAME,
	host: process.env.KEYCLOAK_DB_HOST,
	database: process.env.KEYCLOAK_DB_DATABASE,
	password: process.env.KEYCLOAK_DB_PASSWORD,
	port: process.env.KEYCLOAK_DB_PORT,
});

client
	.connect()
	.then(() => console.log("PostgreSQL connected successfully"))
	.catch((err) => console.error("PostgreSQL connection failed:", err));

module.exports = { client };
