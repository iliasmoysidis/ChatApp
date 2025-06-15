const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('client', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    full_scope_allowed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    client_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "uk_b71cjlbenv945rb6gcon438at"
    },
    not_before: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    public_client: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    secret: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    base_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bearer_only: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    management_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    surrogate_auth_required: {
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
      unique: "uk_b71cjlbenv945rb6gcon438at"
    },
    protocol: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    node_rereg_timeout: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    frontchannel_logout: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    consent_required: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    service_accounts_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    client_authenticator_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    root_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    registration_token: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    client_template_id: {
      type: DataTypes.STRING(36),
      allowNull: true,
      references: {
        model: 'client_template',
        key: 'id'
      }
    },
    use_template_config: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    use_template_scope: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    use_template_mappers: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'client',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_7",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "uk_b71cjlbenv945rb6gcon438at",
        unique: true,
        fields: [
          { name: "realm_id" },
          { name: "client_id" },
        ]
      },
    ]
  });
};
