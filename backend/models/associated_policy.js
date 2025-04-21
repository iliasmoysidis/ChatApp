const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('associated_policy', {
    policy_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'resource_server_policy',
        key: 'id'
      }
    },
    associated_policy_id: {
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
    tableName: 'associated_policy',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_farsrpap",
        unique: true,
        fields: [
          { name: "policy_id" },
          { name: "associated_policy_id" },
        ]
      },
      {
        name: "idx_assoc_pol_assoc_pol_id",
        fields: [
          { name: "associated_policy_id" },
        ]
      },
    ]
  });
};
