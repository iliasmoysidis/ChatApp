const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('credential', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    device: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    hash_iterations: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    salt: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    value: {
      type: DataTypes.STRING(4000),
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
    counter: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    digits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 6
    },
    period: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 30
    },
    algorithm: {
      type: DataTypes.STRING(36),
      allowNull: true
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
