const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fed_user_attribute', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    user_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    realm_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    storage_provider_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    value: {
      type: DataTypes.STRING(2024),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'fed_user_attribute',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constr_fed_user_attr_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_fu_attribute",
        fields: [
          { name: "user_id" },
          { name: "realm_id" },
          { name: "name" },
        ]
      },
    ]
  });
};
