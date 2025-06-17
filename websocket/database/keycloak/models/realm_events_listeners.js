const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('realm_events_listeners', {
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
    tableName: 'realm_events_listeners',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constr_realm_events_listeners",
        unique: true,
        fields: [
          { name: "realm_id" },
          { name: "value" },
        ]
      },
      {
        name: "idx_realm_evt_list_realm",
        fields: [
          { name: "realm_id" },
        ]
      },
    ]
  });
};
