const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('template_scope_mapping', {
    template_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'client_template',
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
    tableName: 'template_scope_mapping',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_templ_scope_mapp_role",
        fields: [
          { name: "role_id" },
        ]
      },
      {
        name: "pk_template_scope",
        unique: true,
        fields: [
          { name: "template_id" },
          { name: "role_id" },
        ]
      },
    ]
  });
};
