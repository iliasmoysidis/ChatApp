const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_federation_mapper', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    federation_provider_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'user_federation_provider',
        key: 'id'
      }
    },
    federation_mapper_type: {
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
    tableName: 'user_federation_mapper',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_fedmapperpm",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_usr_fed_map_fed_prv",
        fields: [
          { name: "federation_provider_id" },
        ]
      },
      {
        name: "idx_usr_fed_map_realm",
        fields: [
          { name: "realm_id" },
        ]
      },
    ]
  });
};
