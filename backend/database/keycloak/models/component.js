const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('component', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    parent_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    provider_id: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    provider_type: {
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
    sub_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'component',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constr_component_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_component_provider_type",
        fields: [
          { name: "provider_type" },
        ]
      },
      {
        name: "idx_component_realm",
        fields: [
          { name: "realm_id" },
        ]
      },
    ]
  });
};
