const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('username_login_failure', {
    realm_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    failed_login_not_before: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    last_failure: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    last_ip_failure: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    num_failures: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'username_login_failure',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "CONSTRAINT_17-2",
        unique: true,
        fields: [
          { name: "realm_id" },
          { name: "username" },
        ]
      },
    ]
  });
};
