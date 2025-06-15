const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('group_attribute', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      defaultValue: "sybase-needs-something-here",
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    group_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'keycloak_group',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'group_attribute',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_group_attribute_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_group_attr_group",
        fields: [
          { name: "group_id" },
        ]
      },
    ]
  });
};
