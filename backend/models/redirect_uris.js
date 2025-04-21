const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('redirect_uris', {
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
    tableName: 'redirect_uris',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_redirect_uris",
        unique: true,
        fields: [
          { name: "client_id" },
          { name: "value" },
        ]
      },
      {
        name: "idx_redir_uri_client",
        fields: [
          { name: "client_id" },
        ]
      },
    ]
  });
};
