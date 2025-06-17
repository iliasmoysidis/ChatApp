const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fed_user_consent_cl_scope', {
    user_consent_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    scope_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'fed_user_consent_cl_scope',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_fgrntcsnt_clsc_pm",
        unique: true,
        fields: [
          { name: "user_consent_id" },
          { name: "scope_id" },
        ]
      },
    ]
  });
};
