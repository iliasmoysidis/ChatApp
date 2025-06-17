const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('realm_enabled_event_types', {
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
    tableName: 'realm_enabled_event_types',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constr_realm_enabl_event_types",
        unique: true,
        fields: [
          { name: "realm_id" },
          { name: "value" },
        ]
      },
      {
        name: "idx_realm_evt_types_realm",
        fields: [
          { name: "realm_id" },
        ]
      },
    ]
  });
};
