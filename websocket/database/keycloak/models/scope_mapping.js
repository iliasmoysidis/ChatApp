const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scope_mapping', {
    client_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'client',
        key: 'id'
      }
    },
    role_id: {
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
    tableName: 'scope_mapping',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_81",
        unique: true,
        fields: [
          { name: "client_id" },
          { name: "role_id" },
        ]
      },
      {
        name: "idx_scope_mapping_role",
        fields: [
          { name: "role_id" },
        ]
      },
    ]
  });
};
