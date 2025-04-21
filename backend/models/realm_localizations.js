const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('realm_localizations', {
    realm_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    locale: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    texts: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'realm_localizations',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "realm_localizations_pkey",
        unique: true,
        fields: [
          { name: "realm_id" },
          { name: "locale" },
        ]
      },
    ]
  });
};
