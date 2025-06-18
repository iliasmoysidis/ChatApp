require("dotenv").config();

const server = require("./server/index");

const PORT = process.env.PORT || 3000;
server.listen(PORT, async () => {
	console.log(`Server is now listening on PORT ${PORT}`);
});
