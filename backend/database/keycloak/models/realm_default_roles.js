const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('realm_default_roles', {
    realm_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'realm',
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
      unique: "uk_h4wpd7w4hsoolni3h0sw7btje"
    }
  }, {
    sequelize,
    tableName: 'realm_default_roles',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_realm_default_roles",
        unique: true,
        fields: [
          { name: "realm_id" },
          { name: "role_id" },
        ]
      },
      {
        name: "idx_realm_def_roles_realm",
        fields: [
          { name: "realm_id" },
        ]
      },
      {
        name: "uk_h4wpd7w4hsoolni3h0sw7btje",
        unique: true,
        fields: [
          { name: "role_id" },
        ]
      },
    ]
  });
};
