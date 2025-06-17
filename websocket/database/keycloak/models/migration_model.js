const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('migration_model', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    version: {
      type: DataTypes.STRING(36),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'migration_model',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_migmod",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
