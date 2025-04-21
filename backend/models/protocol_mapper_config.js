const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('protocol_mapper_config', {
    protocol_mapper_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'protocol_mapper',
        key: 'id'
      }
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'protocol_mapper_config',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_pmconfig",
        unique: true,
        fields: [
          { name: "protocol_mapper_id" },
          { name: "name" },
        ]
      },
    ]
  });
};
