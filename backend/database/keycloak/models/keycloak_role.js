const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('keycloak_role', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    client_realm_constraint: {
      type: DataTypes.STRING(36),
      allowNull: true,
      unique: "UK_J3RWUVD56ONTGSUHOGM184WW2-2"
    },
    client_role: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "UK_J3RWUVD56ONTGSUHOGM184WW2-2"
    },
    realm_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    client: {
      type: DataTypes.STRING(36),
      allowNull: true,
      references: {
        model: 'client',
        key: 'id'
      }
    },
    realm: {
      type: DataTypes.STRING(36),
      allowNull: true,
      references: {
        model: 'realm',
        key: 'id'
      }
    },
    scope_param_required: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'keycloak_role',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "UK_J3RWUVD56ONTGSUHOGM184WW2-2",
        unique: true,
        fields: [
          { name: "name" },
          { name: "client_realm_constraint" },
        ]
      },
      {
        name: "constraint_a",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_keycloak_role_client",
        fields: [
          { name: "client" },
        ]
      },
      {
        name: "idx_keycloak_role_realm",
        fields: [
          { name: "realm" },
        ]
      },
    ]
  });
};
