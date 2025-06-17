const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('client_initial_access', {
    id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    realm_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      references: {
        model: 'realm',
        key: 'id'
      }
    },
    timestamp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    expiration: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    remaining_count: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'client_initial_access',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cnstr_client_init_acc_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_client_init_acc_realm",
        fields: [
          { name: "realm_id" },
        ]
      },
    ]
  });
};
