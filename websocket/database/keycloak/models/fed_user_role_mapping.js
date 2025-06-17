const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fed_user_role_mapping', {
    role_id: {
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
    tableName: 'fed_user_role_mapping',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constr_fed_user_role",
        unique: true,
        fields: [
          { name: "role_id" },
          { name: "user_id" },
        ]
      },
      {
        name: "idx_fu_role_mapping",
        fields: [
          { name: "user_id" },
          { name: "role_id" },
        ]
      },
      {
        name: "idx_fu_role_mapping_ru",
        fields: [
          { name: "realm_id" },
          { name: "user_id" },
        ]
      },
    ]
  });
};
