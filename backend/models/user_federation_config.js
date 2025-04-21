const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_federation_config', {
    user_federation_provider_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user_federation_provider',
        key: 'id'
      }
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'user_federation_config',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_f9",
        unique: true,
        fields: [
          { name: "user_federation_provider_id" },
          { name: "name" },
        ]
      },
    ]
  });
};
