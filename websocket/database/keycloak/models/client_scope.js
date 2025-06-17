const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('client_scope', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "uk_cli_scope"
    },
    realm_id: {
      type: DataTypes.STRING(36),
      allowNull: true,
      unique: "uk_cli_scope"
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    protocol: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'client_scope',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_realm_clscope",
        fields: [
          { name: "realm_id" },
        ]
      },
      {
        name: "pk_cli_template",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "uk_cli_scope",
        unique: true,
        fields: [
          { name: "realm_id" },
          { name: "name" },
        ]
      },
    ]
  });
};
