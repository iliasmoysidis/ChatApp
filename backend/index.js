require("dotenv").config();

const server = require("./server/index");
const { initSocket } = require("./socket/index");

const PORT = process.env.PORT || 3000;

initSocket(server);
server.listen(PORT, async () => {
	console.log(`Server is now listening on PORT ${PORT}`);
});
