const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('identity_provider', {
    internal_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    provider_alias: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "uk_2daelwnibji49avxsrtuf6xj33"
    },
    provider_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    store_token: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    authenticate_by_default: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    realm_id: {
      type: DataTypes.STRING(36),
      allowNull: true,
      references: {
        model: 'realm',
        key: 'id'
      },
      unique: "uk_2daelwnibji49avxsrtuf6xj33"
    },
    add_token_role: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    trust_email: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    first_broker_login_flow_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    post_broker_login_flow_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    provider_display_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    link_only: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'identity_provider',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_2b",
        unique: true,
        fields: [
          { name: "internal_id" },
        ]
      },
      {
        name: "idx_ident_prov_realm",
        fields: [
          { name: "realm_id" },
        ]
      },
      {
        name: "uk_2daelwnibji49avxsrtuf6xj33",
        unique: true,
        fields: [
          { name: "provider_alias" },
          { name: "realm_id" },
        ]
      },
    ]
  });
};
