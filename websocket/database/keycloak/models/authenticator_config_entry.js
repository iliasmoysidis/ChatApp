const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('authenticator_config_entry', {
    authenticator_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'authenticator_config_entry',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_auth_cfg_pk",
        unique: true,
        fields: [
          { name: "authenticator_id" },
          { name: "name" },
        ]
      },
    ]
  });
};
