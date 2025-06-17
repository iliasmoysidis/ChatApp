const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('default_client_scope', {
    realm_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'realm',
        key: 'id'
      }
    },
    scope_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    default_scope: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'default_client_scope',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_defcls_realm",
        fields: [
          { name: "realm_id" },
        ]
      },
      {
        name: "idx_defcls_scope",
        fields: [
          { name: "scope_id" },
        ]
      },
      {
        name: "r_def_cli_scope_bind",
        unique: true,
        fields: [
          { name: "realm_id" },
          { name: "scope_id" },
        ]
      },
    ]
  });
};
