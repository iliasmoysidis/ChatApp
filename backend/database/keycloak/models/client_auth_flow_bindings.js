const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('client_auth_flow_bindings', {
    client_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    flow_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    binding_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'client_auth_flow_bindings',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "c_cli_flow_bind",
        unique: true,
        fields: [
          { name: "client_id" },
          { name: "binding_name" },
        ]
      },
    ]
  });
};
