const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('client_template', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "uk_cli_template"
    },
    realm_id: {
      type: DataTypes.STRING(36),
      allowNull: true,
      references: {
        model: 'realm',
        key: 'id'
      },
      unique: "uk_cli_template"
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    protocol: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    full_scope_allowed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    consent_required: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    standard_flow_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    implicit_flow_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    direct_access_grants_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    service_accounts_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    frontchannel_logout: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    bearer_only: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    public_client: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'client_template',
    schema: 'public',
    timestamps: false
  });
};
