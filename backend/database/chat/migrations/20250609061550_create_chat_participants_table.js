"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("chat_participants", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			chat_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "chats",
					key: "id",
				},
				onDelete: "CASCADE",
			},
			user_id: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn("now"),
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn("now"),
			},
		});

		await queryInterface.addConstraint("chat_participants", {
			fields: ["chat_id", "user_id"],
			type: "unique",
			name: "chat_participants_chat_id_user_id_unique",
		});

		await queryInterface.addIndex("chat_participants", ["user_id"], {
			name: "chat_participants_user_id_index",
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("chat_participants");
	},
};
