const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('offline_user_session', {
    user_session_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    realm_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    },
    created_on: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    offline_flag: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    last_session_refresh: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'offline_user_session',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_offl_us_ses_pk2",
        unique: true,
        fields: [
          { name: "user_session_id" },
          { name: "offline_flag" },
        ]
      },
      {
        name: "idx_offline_uss_by_user",
        fields: [
          { name: "user_id" },
          { name: "realm_id" },
          { name: "offline_flag" },
        ]
      },
      {
        name: "idx_offline_uss_by_usersess",
        fields: [
          { name: "realm_id" },
          { name: "offline_flag" },
          { name: "user_session_id" },
        ]
      },
      {
        name: "idx_offline_uss_createdon",
        fields: [
          { name: "created_on" },
        ]
      },
      {
        name: "idx_offline_uss_preload",
        fields: [
          { name: "offline_flag" },
          { name: "created_on" },
          { name: "user_session_id" },
        ]
      },
    ]
  });
};
