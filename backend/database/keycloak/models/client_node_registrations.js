const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('client_node_registrations', {
    client_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'client',
        key: 'id'
      }
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'client_node_registrations',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_84",
        unique: true,
        fields: [
          { name: "client_id" },
          { name: "name" },
        ]
      },
    ]
  });
};
