const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('composite_role', {
    composite: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'keycloak_role',
        key: 'id'
      }
    },
    child_role: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'keycloak_role',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'composite_role',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_composite_role",
        unique: true,
        fields: [
          { name: "composite" },
          { name: "child_role" },
        ]
      },
      {
        name: "idx_composite",
        fields: [
          { name: "composite" },
        ]
      },
      {
        name: "idx_composite_child",
        fields: [
          { name: "child_role" },
        ]
      },
    ]
  });
};
