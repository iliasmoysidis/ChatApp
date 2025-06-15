const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('resource_server_policy', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "uk_frsrpt700s9v50bu18ws5ha6"
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    decision_strategy: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    logic: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    resource_server_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'resource_server',
        key: 'id'
      },
      unique: "uk_frsrpt700s9v50bu18ws5ha6"
    }
  }, {
    sequelize,
    tableName: 'resource_server_policy',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_farsrp",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_res_serv_pol_res_serv",
        fields: [
          { name: "resource_server_id" },
        ]
      },
      {
        name: "uk_frsrpt700s9v50bu18ws5ha6",
        unique: true,
        fields: [
          { name: "name" },
          { name: "resource_server_id" },
        ]
      },
    ]
  });
};
