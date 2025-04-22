const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('required_action_provider', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    alias: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    realm_id: {
      type: DataTypes.STRING(36),
      allowNull: true,
      references: {
        model: 'realm',
        key: 'id'
      }
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    default_action: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    provider_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'required_action_provider',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_req_act_prv_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_req_act_prov_realm",
        fields: [
          { name: "realm_id" },
        ]
      },
    ]
  });
};
