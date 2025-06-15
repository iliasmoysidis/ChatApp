const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('group_role_mapping', {
    role_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'keycloak_role',
        key: 'id'
      }
    },
    group_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'keycloak_group',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'group_role_mapping',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_group_role",
        unique: true,
        fields: [
          { name: "role_id" },
          { name: "group_id" },
        ]
      },
      {
        name: "idx_group_role_mapp_group",
        fields: [
          { name: "group_id" },
        ]
      },
    ]
  });
};
