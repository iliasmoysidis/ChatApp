const { Sequelize } = require("sequelize");
const SequelizeAuto = require("sequelize-auto");

const sequelize = new Sequelize(
	process.env.KEYCLOAK_DB_DATABASE,
	process.env.KEYCLOAK_DB_USERNAME,
	process.env.KEYCLOAK_DB_PASSWORD,
	{
		host: process.env.KEYCLOAK_DB_HOST,
		dialect: "postgres",
		port: process.env.KEYCLOAK_DB_PORT,
	}
);

const auto = new SequelizeAuto(
	process.env.KEYCLOAK_DB_DATABASE,
	process.env.KEYCLOAK_DB_USERNAME,
	process.env.KEYCLOAK_DB_PASSWORD,
	{
		host: process.env.KEYCLOAK_DB_HOST,
		dialect: "postgres",
		port: process.env.KEYCLOAK_DB_PORT,
		directory: "./database/keycloak/models",
		caseModel: "pascal",
		caseFile: "camel",
		additional: { timestamps: false },
	}
);

module.exports = {
	sequelize,
	auto,
};
