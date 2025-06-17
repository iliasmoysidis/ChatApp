const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_session', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    auth_method: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ip_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_session_refresh: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    login_username: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    realm_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    remember_me: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    started: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_session_state: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    broker_session_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    broker_user_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_session',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_57",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
