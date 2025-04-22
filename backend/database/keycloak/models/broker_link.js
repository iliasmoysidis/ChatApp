const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('broker_link', {
    identity_provider: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    storage_provider_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    realm_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    broker_user_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    broker_username: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'broker_link',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constr_broker_link_pk",
        unique: true,
        fields: [
          { name: "identity_provider" },
          { name: "user_id" },
        ]
      },
    ]
  });
};
