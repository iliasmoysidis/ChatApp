const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('realm', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    access_code_lifespan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_action_lifespan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    access_token_lifespan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    account_theme: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    admin_theme: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email_theme: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    events_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    events_expiration: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    login_theme: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "uk_orvsdmla56612eaefiq6wl5oi"
    },
    not_before: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    password_policy: {
      type: DataTypes.STRING(2550),
      allowNull: true
    },
    registration_allowed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    remember_me: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    reset_password_allowed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    social: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    ssl_required: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sso_idle_timeout: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sso_max_lifespan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    update_profile_on_soc_login: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    verify_email: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    master_admin_client: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    login_lifespan: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    internationalization_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    default_locale: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reg_email_as_username: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    admin_events_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    admin_events_details_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    edit_username_allowed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    otp_policy_counter: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    otp_policy_window: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    otp_policy_period: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 30
    },
    otp_policy_digits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 6
    },
    otp_policy_alg: {
      type: DataTypes.STRING(36),
      allowNull: true,
      defaultValue: "HmacSHA1"
    },
    otp_policy_type: {
      type: DataTypes.STRING(36),
      allowNull: true,
      defaultValue: "totp"
    },
    browser_flow: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    registration_flow: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    direct_grant_flow: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    reset_credentials_flow: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    client_auth_flow: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    offline_session_idle_timeout: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    revoke_refresh_token: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    access_token_life_implicit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    login_with_email_allowed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    duplicate_emails_allowed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    docker_auth_flow: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    refresh_token_max_reuse: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    allow_user_managed_access: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    sso_max_lifespan_remember_me: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    sso_idle_timeout_remember_me: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    default_role: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'realm',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_4a",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_realm_master_adm_cli",
        fields: [
          { name: "master_admin_client" },
        ]
      },
      {
        name: "uk_orvsdmla56612eaefiq6wl5oi",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
};
