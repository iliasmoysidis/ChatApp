const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fed_user_required_action', {
    required_action: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: " ",
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    realm_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    storage_provider_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'fed_user_required_action',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constr_fed_required_action",
        unique: true,
        fields: [
          { name: "required_action" },
          { name: "user_id" },
        ]
      },
      {
        name: "idx_fu_required_action",
        fields: [
          { name: "user_id" },
          { name: "required_action" },
        ]
      },
      {
        name: "idx_fu_required_action_ru",
        fields: [
          { name: "realm_id" },
          { name: "user_id" },
        ]
      },
    ]
  });
};
