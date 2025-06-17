const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('org_domain', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    org_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'org_domain',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ORG_DOMAIN_pkey",
        unique: true,
        fields: [
          { name: "id" },
          { name: "name" },
        ]
      },
      {
        name: "idx_org_domain_org_id",
        fields: [
          { name: "org_id" },
        ]
      },
    ]
  });
};
