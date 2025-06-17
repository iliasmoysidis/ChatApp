const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_group_membership', {
    group_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user_entity',
        key: 'id'
      }
    },
    membership_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'user_group_membership',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_user_group",
        unique: true,
        fields: [
          { name: "group_id" },
          { name: "user_id" },
        ]
      },
      {
        name: "idx_user_group_mapping",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
