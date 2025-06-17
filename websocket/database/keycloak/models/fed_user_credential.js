const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fed_user_credential', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    device: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    hash_iterations: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    salt: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_date: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    counter: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    digits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 6
    },
    period: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 30
    },
    algorithm: {
      type: DataTypes.STRING(36),
      allowNull: true,
      defaultValue: "HmacSHA1"
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
