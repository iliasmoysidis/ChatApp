const { Sequelize } = require("sequelize");
const initModels = require("./init-models");

const sequelize = new Sequelize(
	process.env.POSTGRES_DATABASE,
	process.env.POSTGRES_USERNAME,
	process.env.POSTGRES_PASSWORD,
	{
		host: process.env.POSTGRES_HOST,
		dialect: "postgres",
		port: process.env.POSTGRES_PORT,
	}
);

const models = initModels(sequelize);

module.exports = {
	models,
	sequelize,
};
