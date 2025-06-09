const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fed_user_consent_role', {
    user_consent_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    role_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'fed_user_consent_role',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constr_user_consent_role_pk",
        unique: true,
        fields: [
          { name: "user_consent_id" },
          { name: "role_id" },
        ]
      },
    ]
  });
};
