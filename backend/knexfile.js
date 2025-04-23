const path = require("path");

module.exports = {
	development: {
		client: "pg",
		connection: {
			host: process.env.CHAT_DB_HOST,
			port: process.env.CHAT_DB_PORT,
			user: process.env.CHAT_DB_USERNAME,
			password: process.env.CHAT_DB_PASSWORD,
			database: process.env.CHAT_DB_DATABASE,
		},
		migrations: {
			directory: "./database/chat/migrations",
		},
	},
};
