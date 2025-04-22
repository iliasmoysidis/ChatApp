const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('idp_mapper_config', {
    idp_mapper_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'identity_provider_mapper',
        key: 'id'
      }
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'idp_mapper_config',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_idpmconfig",
        unique: true,
        fields: [
          { name: "idp_mapper_id" },
          { name: "name" },
        ]
      },
    ]
  });
};
