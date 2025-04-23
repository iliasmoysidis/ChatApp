const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('credential_attribute', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    credential_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'credential',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    value: {
      type: DataTypes.STRING(4000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'credential_attribute',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_credential_attr",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_credential_attr_cred",
        fields: [
          { name: "credential_id" },
        ]
      },
    ]
  });
};
