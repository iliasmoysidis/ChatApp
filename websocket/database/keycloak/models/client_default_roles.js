const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('client_default_roles', {
    client_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'client',
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
      },
      unique: "uk_8aelwnibji49avxsrtuf6xjow"
    }
  }, {
    sequelize,
    tableName: 'client_default_roles',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constr_client_default_roles",
        unique: true,
        fields: [
          { name: "client_id" },
          { name: "role_id" },
        ]
      },
      {
        name: "idx_client_def_roles_client",
        fields: [
          { name: "client_id" },
        ]
      },
      {
        name: "uk_8aelwnibji49avxsrtuf6xjow",
        unique: true,
        fields: [
          { name: "role_id" },
        ]
      },
    ]
  });
};
