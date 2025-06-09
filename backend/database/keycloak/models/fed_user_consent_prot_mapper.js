const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fed_user_consent_prot_mapper', {
    user_consent_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    protocol_mapper_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'fed_user_consent_prot_mapper',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constr_user_consent_protm_pk",
        unique: true,
        fields: [
          { name: "user_consent_id" },
          { name: "protocol_mapper_id" },
        ]
      },
    ]
  });
};
