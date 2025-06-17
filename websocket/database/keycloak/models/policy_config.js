const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('policy_config', {
    policy_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'resource_server_policy',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'policy_config',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_dpc",
        unique: true,
        fields: [
          { name: "policy_id" },
          { name: "name" },
        ]
      },
    ]
  });
};
