const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('resource_scope', {
    resource_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'resource_server_resource',
        key: 'id'
      }
    },
    scope_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'resource_server_scope',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'resource_scope',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_farsrsp",
        unique: true,
        fields: [
          { name: "resource_id" },
          { name: "scope_id" },
        ]
      },
      {
        name: "idx_res_scope_scope",
        fields: [
          { name: "scope_id" },
        ]
      },
    ]
  });
};
