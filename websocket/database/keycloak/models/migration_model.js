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
    },
    update_time: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
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
      {
        name: "idx_update_time",
        fields: [
          { name: "update_time" },
        ]
      },
    ]
  });
};
