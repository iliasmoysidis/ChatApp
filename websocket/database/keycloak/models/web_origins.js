const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_origins', {
    client_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'client',
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
    tableName: 'web_origins',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_web_origins",
        unique: true,
        fields: [
          { name: "client_id" },
          { name: "value" },
        ]
      },
      {
        name: "idx_web_orig_client",
        fields: [
          { name: "client_id" },
        ]
      },
    ]
  });
};
