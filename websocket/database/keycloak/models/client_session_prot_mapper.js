const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('client_session_prot_mapper', {
    protocol_mapper_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    client_session: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'client_session',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'client_session_prot_mapper',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "constraint_cs_pmp_pk",
        unique: true,
        fields: [
          { name: "client_session" },
          { name: "protocol_mapper_id" },
        ]
      },
    ]
  });
};
