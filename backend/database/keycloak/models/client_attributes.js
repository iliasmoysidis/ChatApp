const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('client_attributes', {
    client_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'client',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'client_attributes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_3c",
        unique: true,
        fields: [
          { name: "client_id" },
          { name: "name" },
        ]
      },
      {
        name: "idx_client_att_by_name_value",
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
};
