const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('realm_default_groups', {
    realm_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'realm',
        key: 'id'
      }
    },
    group_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'keycloak_group',
        key: 'id'
      },
      unique: "con_group_id_def_groups"
    }
  }, {
    sequelize,
    tableName: 'realm_default_groups',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "con_group_id_def_groups",
        unique: true,
        fields: [
          { name: "group_id" },
        ]
      },
      {
        name: "constr_realm_default_groups",
        unique: true,
        fields: [
          { name: "realm_id" },
          { name: "group_id" },
        ]
      },
      {
        name: "idx_realm_def_grp_realm",
        fields: [
          { name: "realm_id" },
        ]
      },
    ]
  });
};
