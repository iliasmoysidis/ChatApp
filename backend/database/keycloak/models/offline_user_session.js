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
    },
    broker_session_id: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    version: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
        name: "idx_offline_uss_by_broker_session_id",
        fields: [
          { name: "broker_session_id" },
          { name: "realm_id" },
        ]
      },
      {
        name: "idx_offline_uss_by_last_session_refresh",
        fields: [
          { name: "realm_id" },
          { name: "offline_flag" },
          { name: "last_session_refresh" },
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
    ]
  });
};
