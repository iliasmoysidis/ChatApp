module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		"chat_participant",
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			chat_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: "chats",
					key: "id",
				},
			},
			user_id: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					isEmail: true,
				},
			},
		},
		{
			sequelize,
			tableName: "chat_participants",
			schema: "public",
			timestamps: true,
			indexes: [
				{
					name: "chat_participants_chat_id_user_id_unique",
					unique: true,
					fields: ["chat_id", "user_id"],
				},
				{
					name: "chat_participants_user_id_index",
					fields: ["user_id"],
				},
			],
			hooks: {
				afterDestroy: async (participant, options) => {
					const chatId = participant.chat_id;

					const count = await sequelize.models.chat_participant.count(
						{
							where: { chat_id: chatId },
						}
					);

					if (count === 0) {
						await sequelize.models.chat.destroy({
							where: { id: chatId },
						});
					}
				},
			},
		}
	);
};
