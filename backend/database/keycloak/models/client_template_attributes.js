const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('client_template_attributes', {
    template_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'client_template',
        key: 'id'
      }
    },
    value: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'client_template_attributes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_cl_tmpl_attr",
        unique: true,
        fields: [
          { name: "template_id" },
          { name: "name" },
        ]
      },
    ]
  });
};
