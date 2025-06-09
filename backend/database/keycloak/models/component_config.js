const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('component_config', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    component_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'component',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'component_config',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constr_component_config_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_compo_config_compo",
        fields: [
          { name: "component_id" },
        ]
      },
    ]
  });
};
