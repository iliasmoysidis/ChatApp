const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('resource_server', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    allow_rs_remote_mgmt: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    policy_enforce_mode: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    decision_strategy: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'resource_server',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_resource_server",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
