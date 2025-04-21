const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fed_user_consent', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    client_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    realm_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    storage_provider_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    created_date: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    last_updated_date: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    client_storage_provider: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    external_client_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'fed_user_consent',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constr_fed_user_consent_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_fu_cnsnt_ext",
        fields: [
          { name: "user_id" },
          { name: "client_storage_provider" },
          { name: "external_client_id" },
        ]
      },
      {
        name: "idx_fu_consent",
        fields: [
          { name: "user_id" },
          { name: "client_id" },
        ]
      },
      {
        name: "idx_fu_consent_ru",
        fields: [
          { name: "realm_id" },
          { name: "user_id" },
        ]
      },
    ]
  });
};
