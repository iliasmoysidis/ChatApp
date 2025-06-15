const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

var _chat = require("./chat");
var _chat_participant = require("./chat_participant");

function initModels(sequelize) {
	var chat = _chat(sequelize, DataTypes);
	var chat_participant = _chat_participant(sequelize, DataTypes);

	chat_participant.belongsTo(chat, { as: "chat", foreignKey: "chat_id" });
	chat.hasMany(chat_participant, {
		as: "participants",
		foreignKey: "chat_id",
	});

	return {
		chat,
		chat_participant,
	};
}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
