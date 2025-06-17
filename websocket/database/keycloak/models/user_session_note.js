const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_session_note', {
    user_session: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user_session',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.STRING(2048),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_session_note',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_usn_pk",
        unique: true,
        fields: [
          { name: "user_session" },
          { name: "name" },
        ]
      },
    ]
  });
};
