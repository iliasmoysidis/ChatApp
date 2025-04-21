const { sequelize } = require("./sequelize-connection");
const initModels = require("../models/init-models");

const models = initModels(sequelize);

module.exports = {
	models,
};
