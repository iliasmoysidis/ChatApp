const { auto } = require("../config/sequelize.config");

auto.run()
	.then((data) => {
		console.log("Models generated successfully!");
		console.log(data);
	})
	.catch((err) => {
		console.error("Error generating models:", err);
	});
