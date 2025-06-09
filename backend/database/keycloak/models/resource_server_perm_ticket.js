const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('resource_server_perm_ticket', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    owner: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "uk_frsr6t700s9v50bu18ws5pmt"
    },
    requester: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "uk_frsr6t700s9v50bu18ws5pmt"
    },
    created_timestamp: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    granted_timestamp: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    resource_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'resource_server_resource',
        key: 'id'
      },
      unique: "uk_frsr6t700s9v50bu18ws5pmt"
    },
    scope_id: {
      type: DataTypes.STRING(36),
      allowNull: true,
      references: {
        model: 'resource_server_scope',
        key: 'id'
      },
      unique: "uk_frsr6t700s9v50bu18ws5pmt"
    },
    resource_server_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'resource_server',
        key: 'id'
      },
      unique: "uk_frsr6t700s9v50bu18ws5pmt"
    },
    policy_id: {
      type: DataTypes.STRING(36),
      allowNull: true,
      references: {
        model: 'resource_server_policy',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'resource_server_perm_ticket',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_fapmt",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "uk_frsr6t700s9v50bu18ws5pmt",
        unique: true,
        fields: [
          { name: "owner" },
          { name: "requester" },
          { name: "resource_server_id" },
          { name: "resource_id" },
          { name: "scope_id" },
        ]
      },
    ]
  });
};
