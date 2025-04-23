const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('client_session_note', {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.STRING(255),
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
    tableName: 'client_session_note',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_5e",
        unique: true,
        fields: [
          { name: "client_session" },
          { name: "name" },
        ]
      },
    ]
  });
};
