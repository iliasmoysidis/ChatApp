const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('client_session', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    client_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    redirect_uri: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    timestamp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    session_id: {
      type: DataTypes.STRING(36),
      allowNull: true,
      references: {
        model: 'user_session',
        key: 'id'
      }
    },
    auth_method: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    realm_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    auth_user_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    current_action: {
      type: DataTypes.STRING(36),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'client_session',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_8",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_client_session_session",
        fields: [
          { name: "session_id" },
        ]
      },
    ]
  });
};
