const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('federated_identity', {
    identity_provider: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    realm_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    federated_user_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    federated_username: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user_entity',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'federated_identity',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_40",
        unique: true,
        fields: [
          { name: "identity_provider" },
          { name: "user_id" },
        ]
      },
      {
        name: "idx_fedidentity_feduser",
        fields: [
          { name: "federated_user_id" },
        ]
      },
      {
        name: "idx_fedidentity_user",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
