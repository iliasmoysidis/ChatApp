const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('databasechangelog', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    author: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    filename: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dateexecuted: {
      type: DataTypes.DATE,
      allowNull: false
    },
    orderexecuted: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    exectype: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    md5sum: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    comments: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tag: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    liquibase: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    contexts: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    labels: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    deployment_id: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'databasechangelog',
    schema: 'public',
    timestamps: false
  });
};
