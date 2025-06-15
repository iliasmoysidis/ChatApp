module.exports = {
	development: {
		username: process.env.CHAT_DB_USERNAME,
		password: process.env.CHAT_DB_PASSWORD,
		database: process.env.CHAT_DB_DATABASE,
		host: process.env.CHAT_DB_HOST,
		dialect: "postgres",
		port: process.env.CHAT_DB_PORT,
	},
	test: {
		username: process.env.CHAT_DB_USERNAME,
		password: process.env.CHAT_DB_PASSWORD,
		database: process.env.CHAT_DB_DATABASE,
		host: process.env.CHAT_DB_HOST,
		dialect: "postgres",
		port: process.env.CHAT_DB_PORT,
	},
	production: {
		username: process.env.CHAT_DB_USERNAME,
		password: process.env.CHAT_DB_PASSWORD,
		database: process.env.CHAT_DB_DATABASE,
		host: process.env.CHAT_DB_HOST,
		dialect: "postgres",
		port: process.env.CHAT_DB_PORT,
	},
};
