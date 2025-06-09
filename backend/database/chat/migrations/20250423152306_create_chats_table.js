exports.up = function (knex) {
	return knex.schema.createTable("chats", (table) => {
		table.increments("id").primary();
		table.timestamps(true, true);
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable("chats");
};
