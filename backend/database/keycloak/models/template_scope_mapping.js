const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('template_scope_mapping', {
    template_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'client_template',
        key: 'id'
      }
    },
    role_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'keycloak_role',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'template_scope_mapping',
    schema: 'public',
    timestamps: false
  });
};
