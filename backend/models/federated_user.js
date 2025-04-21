const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('federated_user', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    storage_provider_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    realm_id: {
      type: DataTypes.STRING(36),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'federated_user',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constr_federated_user",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
