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
      unique: "uk_jkuwuvd56ontgsuhogm8uewrt"
    },
    user_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'user_entity',
        key: 'id'
      },
      unique: "uk_jkuwuvd56ontgsuhogm8uewrt"
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
      unique: "uk_jkuwuvd56ontgsuhogm8uewrt"
    },
    external_client_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "uk_jkuwuvd56ontgsuhogm8uewrt"
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
        name: "uk_jkuwuvd56ontgsuhogm8uewrt",
        unique: true,
        fields: [
          { name: "client_id" },
          { name: "client_storage_provider" },
          { name: "external_client_id" },
          { name: "user_id" },
        ]
      },
    ]
  });
};
