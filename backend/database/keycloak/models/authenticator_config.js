const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('authenticator_config', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    alias: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    realm_id: {
      type: DataTypes.STRING(36),
      allowNull: true,
      references: {
        model: 'realm',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'authenticator_config',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_auth_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_auth_config_realm",
        fields: [
          { name: "realm_id" },
        ]
      },
    ]
  });
};
