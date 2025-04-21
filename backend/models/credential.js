const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('credential', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    salt: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_id: {
      type: DataTypes.STRING(36),
      allowNull: true,
      references: {
        model: 'user_entity',
        key: 'id'
      }
    },
    created_date: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    user_label: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    secret_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    credential_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    version: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'credential',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_f",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_user_credential",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
