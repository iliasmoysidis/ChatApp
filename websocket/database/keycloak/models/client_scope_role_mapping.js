const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('client_scope_role_mapping', {
    scope_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'client_scope',
        key: 'id'
      }
    },
    role_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'client_scope_role_mapping',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_clscope_role",
        fields: [
          { name: "scope_id" },
        ]
      },
      {
        name: "idx_role_clscope",
        fields: [
          { name: "role_id" },
        ]
      },
      {
        name: "pk_template_scope",
        unique: true,
        fields: [
          { name: "scope_id" },
          { name: "role_id" },
        ]
      },
    ]
  });
};
