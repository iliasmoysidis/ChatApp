const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('resource_uris', {
    resource_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'resource_server_resource',
        key: 'id'
      }
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'resource_uris',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_resour_uris_pk",
        unique: true,
        fields: [
          { name: "resource_id" },
          { name: "value" },
        ]
      },
    ]
  });
};
