const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('authentication_flow', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    alias: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    realm_id: {
      type: DataTypes.STRING(36),
      allowNull: true,
      references: {
        model: 'realm',
        key: 'id'
      }
    },
    provider_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      defaultValue: "basic-flow"
    },
    top_level: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    built_in: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'authentication_flow',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_auth_flow_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_auth_flow_realm",
        fields: [
          { name: "realm_id" },
        ]
      },
    ]
  });
};
