const { keycloakSequelize } = require("../config/sequelize.config");
const initModels = require("./init-models");

const keycloakModels = initModels(keycloakSequelize);

module.exports = { keycloakSequelize, keycloakModels };
