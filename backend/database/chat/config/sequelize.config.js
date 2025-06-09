const { Sequelize } = require("sequelize");

const chatSequelize = new Sequelize(
	process.env.CHAT_DB_DATABASE,
	process.env.CHAT_DB_USERNAME,
	process.env.CHAT_DB_PASSWORD,
	{
		host: process.env.CHAT_DB_HOST,
		dialect: "postgres",
		port: process.env.CHAT_DB_PORT,
	}
);

module.exports = {
	chatSequelize,
};
