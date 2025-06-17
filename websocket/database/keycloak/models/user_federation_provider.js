const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_federation_provider', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    changed_sync_period: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    display_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    full_sync_period: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    last_sync: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    provider_name: {
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
    tableName: 'user_federation_provider',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_5c",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_usr_fed_prv_realm",
        fields: [
          { name: "realm_id" },
        ]
      },
    ]
  });
};
