const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_consent_client_scope', {
    user_consent_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user_consent',
        key: 'id'
      }
    },
    scope_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'user_consent_client_scope',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_grntcsnt_clsc_pm",
        unique: true,
        fields: [
          { name: "user_consent_id" },
          { name: "scope_id" },
        ]
      },
      {
        name: "idx_usconsent_clscope",
        fields: [
          { name: "user_consent_id" },
        ]
      },
    ]
  });
};
