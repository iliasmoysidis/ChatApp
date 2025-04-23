const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('client_session_role', {
    role_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
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
    tableName: 'client_session_role',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_5",
        unique: true,
        fields: [
          { name: "client_session" },
          { name: "role_id" },
        ]
      },
    ]
  });
};
