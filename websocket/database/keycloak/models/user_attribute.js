const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_attribute', {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'user_entity',
        key: 'id'
      }
    },
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      defaultValue: "sybase-needs-something-here",
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'user_attribute',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_user_attribute_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_user_attribute",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
