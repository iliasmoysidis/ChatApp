const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('revoked_token', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    expire: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'revoked_token',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_rt",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_rev_token_on_expire",
        fields: [
          { name: "expire" },
        ]
      },
    ]
  });
};
