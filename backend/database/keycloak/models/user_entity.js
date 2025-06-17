const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_entity', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email_constraint: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "uk_dykn684sl8up1crfei6eckhd7"
    },
    email_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    federation_link: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    first_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    realm_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "uk_ru8tt6t700s9v50bu18ws5ha6"
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "uk_ru8tt6t700s9v50bu18ws5ha6"
    },
    created_timestamp: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    service_account_client_link: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    not_before: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'user_entity',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_fb",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_user_email",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "idx_user_service_account",
        fields: [
          { name: "realm_id" },
          { name: "service_account_client_link" },
        ]
      },
      {
        name: "uk_dykn684sl8up1crfei6eckhd7",
        unique: true,
        fields: [
          { name: "realm_id" },
          { name: "email_constraint" },
        ]
      },
      {
        name: "uk_ru8tt6t700s9v50bu18ws5ha6",
        unique: true,
        fields: [
          { name: "realm_id" },
          { name: "username" },
        ]
      },
    ]
  });
};
