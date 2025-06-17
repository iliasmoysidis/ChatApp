const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('client_session_auth_status', {
    authenticator: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    client_session: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'client_session',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'client_session_auth_status',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_auth_status_pk",
        unique: true,
        fields: [
          { name: "client_session" },
          { name: "authenticator" },
        ]
      },
    ]
  });
};
