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
    last_session_refresh: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    offline_flag: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true
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
    ]
  });
};
