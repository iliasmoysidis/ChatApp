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
    },
    long_value_hash: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    long_value_hash_lower_case: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    long_value: {
      type: DataTypes.TEXT,
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
        name: "fed_user_attr_long_values",
        fields: [
          { name: "long_value_hash" },
          { name: "name" },
        ]
      },
      {
        name: "fed_user_attr_long_values_lower_case",
        fields: [
          { name: "long_value_hash_lower_case" },
          { name: "name" },
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
