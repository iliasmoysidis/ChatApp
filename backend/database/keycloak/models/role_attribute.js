const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('role_attribute', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    role_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'keycloak_role',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'role_attribute',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_role_attribute_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_role_attribute",
        fields: [
          { name: "role_id" },
        ]
      },
    ]
  });
};
