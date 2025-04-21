const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('identity_provider_mapper', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    idp_alias: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    idp_mapper_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    realm_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'realm',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'identity_provider_mapper',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_idpm",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_id_prov_mapp_realm",
        fields: [
          { name: "realm_id" },
        ]
      },
    ]
  });
};
