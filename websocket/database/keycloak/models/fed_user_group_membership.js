const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fed_user_group_membership', {
    group_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
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
    tableName: 'fed_user_group_membership',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constr_fed_user_group",
        unique: true,
        fields: [
          { name: "group_id" },
          { name: "user_id" },
        ]
      },
      {
        name: "idx_fu_group_membership",
        fields: [
          { name: "user_id" },
          { name: "group_id" },
        ]
      },
      {
        name: "idx_fu_group_membership_ru",
        fields: [
          { name: "realm_id" },
          { name: "user_id" },
        ]
      },
    ]
  });
};
