const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fed_user_credential', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    salt: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_date: {
      type: DataTypes.BIGINT,
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
    user_label: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    secret_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    credential_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'fed_user_credential',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constr_fed_user_cred_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_fu_credential",
        fields: [
          { name: "user_id" },
          { name: "type" },
        ]
      },
      {
        name: "idx_fu_credential_ru",
        fields: [
          { name: "realm_id" },
          { name: "user_id" },
        ]
      },
    ]
  });
};
