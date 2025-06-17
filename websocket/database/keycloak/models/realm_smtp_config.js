const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('realm_smtp_config', {
    realm_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'realm',
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
    tableName: 'realm_smtp_config',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_e",
        unique: true,
        fields: [
          { name: "realm_id" },
          { name: "name" },
        ]
      },
    ]
  });
};
