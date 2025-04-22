const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('authentication_execution', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    alias: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    authenticator: {
      type: DataTypes.STRING(36),
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
    flow_id: {
      type: DataTypes.STRING(36),
      allowNull: true,
      references: {
        model: 'authentication_flow',
        key: 'id'
      }
    },
    requirement: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    authenticator_flow: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    auth_flow_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    auth_config: {
      type: DataTypes.STRING(36),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'authentication_execution',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_auth_exec_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_auth_exec_flow",
        fields: [
          { name: "flow_id" },
        ]
      },
      {
        name: "idx_auth_exec_realm_flow",
        fields: [
          { name: "realm_id" },
          { name: "flow_id" },
        ]
      },
    ]
  });
};
