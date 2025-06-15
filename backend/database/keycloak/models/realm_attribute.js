const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('realm_attribute', {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    realm_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'realm',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'realm_attribute',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_9",
        unique: true,
        fields: [
          { name: "name" },
          { name: "realm_id" },
        ]
      },
      {
        name: "idx_realm_attr_realm",
        fields: [
          { name: "realm_id" },
        ]
      },
    ]
  });
};
