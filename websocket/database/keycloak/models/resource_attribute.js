const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('resource_attribute', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      defaultValue: "sybase-needs-something-here",
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    resource_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'resource_server_resource',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'resource_attribute',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "res_attr_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
