const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_consent', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    client_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "uk_local_consent"
    },
    user_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'user_entity',
        key: 'id'
      },
      unique: "uk_local_consent"
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
      allowNull: true,
      unique: "uk_external_consent"
    },
    external_client_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "uk_external_consent"
    }
  }, {
    sequelize,
    tableName: 'user_consent',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_grntcsnt_pm",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_user_consent",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "uk_external_consent",
        unique: true,
        fields: [
          { name: "client_storage_provider" },
          { name: "external_client_id" },
          { name: "user_id" },
        ]
      },
      {
        name: "uk_local_consent",
        unique: true,
        fields: [
          { name: "client_id" },
          { name: "user_id" },
        ]
      },
    ]
  });
};
