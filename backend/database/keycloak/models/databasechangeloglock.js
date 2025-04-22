const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('databasechangeloglock', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    locked: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    lockgranted: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lockedby: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'databasechangeloglock',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "databasechangeloglock_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
