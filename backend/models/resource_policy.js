const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('resource_policy', {
    resource_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'resource_server_resource',
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
    tableName: 'resource_policy',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_farsrpp",
        unique: true,
        fields: [
          { name: "resource_id" },
          { name: "policy_id" },
        ]
      },
      {
        name: "idx_res_policy_policy",
        fields: [
          { name: "policy_id" },
        ]
      },
    ]
  });
};
