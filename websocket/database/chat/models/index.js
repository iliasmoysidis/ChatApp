const { chatSequelize } = require("../config/sequelize.config");
const initModels = require("./init-models");

const chatModels = initModels(chatSequelize);

module.exports = { chatSequelize, chatModels };
