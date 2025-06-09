const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_attribute', {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'user_entity',
        key: 'id'
      }
    },
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      defaultValue: "sybase-needs-something-here",
      primaryKey: true
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
    tableName: 'user_attribute',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_user_attribute_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_user_attribute",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "idx_user_attribute_name",
        fields: [
          { name: "name" },
          { name: "value" },
        ]
      },
      {
        name: "user_attr_long_values",
        fields: [
          { name: "long_value_hash" },
          { name: "name" },
        ]
      },
      {
        name: "user_attr_long_values_lower_case",
        fields: [
          { name: "long_value_hash_lower_case" },
          { name: "name" },
        ]
      },
    ]
  });
};
