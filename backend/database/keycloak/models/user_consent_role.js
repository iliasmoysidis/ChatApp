const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_consent_role', {
    user_consent_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user_consent',
        key: 'id'
      }
    },
    role_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'user_consent_role',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_grntcsnt_role_pm",
        unique: true,
        fields: [
          { name: "user_consent_id" },
          { name: "role_id" },
        ]
      },
      {
        name: "idx_consent_role",
        fields: [
          { name: "user_consent_id" },
        ]
      },
    ]
  });
};
