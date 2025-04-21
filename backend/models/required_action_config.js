const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('required_action_config', {
    required_action_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'required_action_config',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_req_act_cfg_pk",
        unique: true,
        fields: [
          { name: "required_action_id" },
          { name: "name" },
        ]
      },
    ]
  });
};
