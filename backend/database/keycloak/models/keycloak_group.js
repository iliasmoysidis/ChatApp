const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('keycloak_group', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "sibling_names"
    },
    parent_group: {
      type: DataTypes.STRING(36),
      allowNull: false,
      unique: "sibling_names"
    },
    realm_id: {
      type: DataTypes.STRING(36),
      allowNull: true,
      unique: "sibling_names"
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'keycloak_group',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_group",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "sibling_names",
        unique: true,
        fields: [
          { name: "realm_id" },
          { name: "parent_group" },
          { name: "name" },
        ]
      },
    ]
  });
};
