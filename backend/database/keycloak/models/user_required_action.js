const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_required_action', {
    user_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user_entity',
        key: 'id'
      }
    },
    required_action: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: " ",
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'user_required_action',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_required_action",
        unique: true,
        fields: [
          { name: "required_action" },
          { name: "user_id" },
        ]
      },
      {
        name: "idx_user_reqactions",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
