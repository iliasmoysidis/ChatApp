const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('realm_supported_locales', {
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
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'realm_supported_locales',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constr_realm_supported_locales",
        unique: true,
        fields: [
          { name: "realm_id" },
          { name: "value" },
        ]
      },
      {
        name: "idx_realm_supp_local_realm",
        fields: [
          { name: "realm_id" },
        ]
      },
    ]
  });
};
