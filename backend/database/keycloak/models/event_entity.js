const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('event_entity', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    client_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    details_json: {
      type: DataTypes.STRING(2550),
      allowNull: true
    },
    error: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ip_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    realm_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    session_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    event_time: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    user_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'event_entity',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_4",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_event_time",
        fields: [
          { name: "realm_id" },
          { name: "event_time" },
        ]
      },
    ]
  });
};
