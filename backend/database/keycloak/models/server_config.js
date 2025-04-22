const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('server_config', {
    server_config_key: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    version: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'server_config',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "SERVER_CONFIG_pkey",
        unique: true,
        fields: [
          { name: "server_config_key" },
        ]
      },
    ]
  });
};
