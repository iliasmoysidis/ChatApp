const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('offline_client_session', {
    user_session_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    client_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    offline_flag: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    timestamp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    client_storage_provider: {
      type: DataTypes.STRING(36),
      allowNull: false,
      defaultValue: "local",
      primaryKey: true
    },
    external_client_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "local",
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'offline_client_session',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_offl_cl_ses_pk3",
        unique: true,
        fields: [
          { name: "user_session_id" },
          { name: "client_id" },
          { name: "client_storage_provider" },
          { name: "external_client_id" },
          { name: "offline_flag" },
        ]
      },
      {
        name: "idx_us_sess_id_on_cl_sess",
        fields: [
          { name: "user_session_id" },
        ]
      },
    ]
  });
};
