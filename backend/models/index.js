const { Sequelize } = require("sequelize");

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

const user_entity = require("../models/user_entity")(
	sequelize,
	Sequelize.DataTypes
);

module.exports = {
	user_entity,
};
