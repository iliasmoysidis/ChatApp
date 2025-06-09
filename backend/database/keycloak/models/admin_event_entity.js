const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admin_event_entity', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    admin_event_time: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    realm_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    operation_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    auth_realm_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    auth_client_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    auth_user_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ip_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    resource_path: {
      type: DataTypes.STRING(2550),
      allowNull: true
    },
    representation: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    error: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    resource_type: {
      type: DataTypes.STRING(64),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'admin_event_entity',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_admin_event_entity",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
