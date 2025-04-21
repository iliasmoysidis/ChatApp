const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('org', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    realm_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "uk_org_name"
    },
    group_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "uk_org_group"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "uk_org_name"
    },
    description: {
      type: DataTypes.STRING(4000),
      allowNull: true
    },
    alias: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "uk_org_alias"
    },
    redirect_url: {
      type: DataTypes.STRING(2048),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'org',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ORG_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "uk_org_alias",
        unique: true,
        fields: [
          { name: "realm_id" },
          { name: "alias" },
        ]
      },
      {
        name: "uk_org_group",
        unique: true,
        fields: [
          { name: "group_id" },
        ]
      },
      {
        name: "uk_org_name",
        unique: true,
        fields: [
          { name: "realm_id" },
          { name: "name" },
        ]
      },
    ]
  });
};
