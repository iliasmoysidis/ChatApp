const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('protocol_mapper', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    protocol: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    protocol_mapper_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    client_id: {
      type: DataTypes.STRING(36),
      allowNull: true,
      references: {
        model: 'client',
        key: 'id'
      }
    },
    client_scope_id: {
      type: DataTypes.STRING(36),
      allowNull: true,
      references: {
        model: 'client_scope',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'protocol_mapper',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_pcm",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_clscope_protmap",
        fields: [
          { name: "client_scope_id" },
        ]
      },
      {
        name: "idx_protocol_mapper_client",
        fields: [
          { name: "client_id" },
        ]
      },
    ]
  });
};
