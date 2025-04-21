const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('realm_required_credential', {
    type: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    form_label: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    input: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    secret: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    realm_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'realm',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'realm_required_credential',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_92",
        unique: true,
        fields: [
          { name: "realm_id" },
          { name: "type" },
        ]
      },
    ]
  });
};
