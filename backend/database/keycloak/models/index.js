const { sequelize } = require("../config/sequelize.config");
const initModels = require("./init-models");

const models = initModels(sequelize);

module.exports = { sequelize, models };
