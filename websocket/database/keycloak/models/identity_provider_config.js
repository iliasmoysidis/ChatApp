const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('identity_provider_config', {
    identity_provider_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'identity_provider',
        key: 'internal_id'
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
    tableName: 'identity_provider_config',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_d",
        unique: true,
        fields: [
          { name: "identity_provider_id" },
          { name: "name" },
        ]
      },
    ]
  });
};
