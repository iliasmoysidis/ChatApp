const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('resource_server_scope', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "uk_frsrst700s9v50bu18ws5ha6"
    },
    icon_uri: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    resource_server_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'resource_server',
        key: 'id'
      },
      unique: "uk_frsrst700s9v50bu18ws5ha6"
    }
  }, {
    sequelize,
    tableName: 'resource_server_scope',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_farsrs",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_res_srv_scope_res_srv",
        fields: [
          { name: "resource_server_id" },
        ]
      },
      {
        name: "uk_frsrst700s9v50bu18ws5ha6",
        unique: true,
        fields: [
          { name: "name" },
          { name: "resource_server_id" },
        ]
      },
    ]
  });
};
