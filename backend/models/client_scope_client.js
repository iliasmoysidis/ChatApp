const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('client_scope_client', {
    client_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    scope_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    default_scope: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'client_scope_client',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "c_cli_scope_bind",
        unique: true,
        fields: [
          { name: "client_id" },
          { name: "scope_id" },
        ]
      },
      {
        name: "idx_cl_clscope",
        fields: [
          { name: "scope_id" },
        ]
      },
      {
        name: "idx_clscope_cl",
        fields: [
          { name: "client_id" },
        ]
      },
    ]
  });
};
