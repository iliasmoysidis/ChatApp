const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_federation_mapper_config', {
    user_federation_mapper_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user_federation_mapper',
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
    tableName: 'user_federation_mapper_config',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_fedmapper_cfg_pm",
        unique: true,
        fields: [
          { name: "user_federation_mapper_id" },
          { name: "name" },
        ]
      },
    ]
  });
};
