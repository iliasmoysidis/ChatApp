const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('client_scope_attributes', {
    scope_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'client_scope',
        key: 'id'
      }
    },
    value: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'client_scope_attributes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_clscope_attrs",
        fields: [
          { name: "scope_id" },
        ]
      },
      {
        name: "pk_cl_tmpl_attr",
        unique: true,
        fields: [
          { name: "scope_id" },
          { name: "name" },
        ]
      },
    ]
  });
};
