const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scope_policy', {
    scope_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'resource_server_scope',
        key: 'id'
      }
    },
    policy_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'resource_server_policy',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'scope_policy',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_farsrsps",
        unique: true,
        fields: [
          { name: "scope_id" },
          { name: "policy_id" },
        ]
      },
      {
        name: "idx_scope_policy_policy",
        fields: [
          { name: "policy_id" },
        ]
      },
    ]
  });
};
