exports.up = function (knex) {
	return knex.schema.createTable("chat_participants", (table) => {
		table.increments("id").primary();
		table.integer("chat_id").unsigned().notNullable();
		table.uuid("user_id").notNullable().index();
		table.timestamps(true, true);

		table
			.foreign("chat_id")
			.references("id")
			.inTable("chats")
			.onDelete("CASCADE");

		table.unique(["chat_id", "user_id"]);
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("chat_participants");
};
