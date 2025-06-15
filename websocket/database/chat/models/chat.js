module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		"chat",
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
		},
		{
			sequelize,
			tableName: "chats",
			schema: "public",
			timestamps: true,
		}
	);
};
