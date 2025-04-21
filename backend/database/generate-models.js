const { Sequelize } = require("sequelize");
const SequelizeAuto = require("sequelize-auto");

const DB_HOST = "postgres";

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

const auto = new SequelizeAuto(
	process.env.POSTGRES_DATABASE,
	process.env.POSTGRES_USERNAME,
	process.env.POSTGRES_PASSWORD,
	{
		host: process.env.POSTGRES_HOST,
		dialect: "postgres",
		port: process.env.POSTGRES_PORT,
		directory: "./models",
		caseModel: "pascal",
		caseFile: "camel",
		additional: { timestamps: false },
	}
);

auto.run()
	.then((data) => {
		console.log("Models generated successfully!");
		console.log(data);
	})
	.catch((err) => {
		console.error("Error generating models:", err);
	});
