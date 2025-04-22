const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jgroups_ping', {
    address: {
      type: DataTypes.STRING(200),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    cluster_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    ip: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    coord: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'jgroups_ping',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_jgroups_ping",
        unique: true,
        fields: [
          { name: "address" },
        ]
      },
    ]
  });
};
