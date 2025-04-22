const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('resource_server_resource', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "uk_frsr6t700s9v50bu18ws5ha6"
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    icon_uri: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    owner: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "uk_frsr6t700s9v50bu18ws5ha6"
    },
    resource_server_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'resource_server',
        key: 'id'
      },
      unique: "uk_frsr6t700s9v50bu18ws5ha6"
    },
    owner_managed_access: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    display_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'resource_server_resource',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_farsr",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_res_srv_res_res_srv",
        fields: [
          { name: "resource_server_id" },
        ]
      },
      {
        name: "uk_frsr6t700s9v50bu18ws5ha6",
        unique: true,
        fields: [
          { name: "name" },
          { name: "owner" },
          { name: "resource_server_id" },
        ]
      },
    ]
  });
};
