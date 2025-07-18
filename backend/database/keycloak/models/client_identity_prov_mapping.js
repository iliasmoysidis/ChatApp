const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('client_identity_prov_mapping', {
    client_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'client',
        key: 'id'
      },
      unique: "uk_7caelwnibji49avxsrtuf6xj12"
    },
    identity_provider_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'identity_provider',
        key: 'internal_id'
      },
      unique: "uk_7caelwnibji49avxsrtuf6xj12"
    },
    retrieve_token: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'client_identity_prov_mapping',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constr_client_iden_prov_map",
        unique: true,
        fields: [
          { name: "client_id" },
          { name: "identity_provider_id" },
        ]
      },
      {
        name: "idx_client_id_prov_map_client",
        fields: [
          { name: "client_id" },
        ]
      },
      {
        name: "uk_7caelwnibji49avxsrtuf6xj12",
        unique: true,
        fields: [
          { name: "identity_provider_id" },
          { name: "client_id" },
        ]
      },
    ]
  });
};
