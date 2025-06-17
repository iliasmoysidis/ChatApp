require("dotenv").config();

const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const { setupSocket } = require("./socket/socket-setup");
const { setupRoutes } = require("./routes/index");

const app = express();
app.use(express.json());
const server = http.createServer(app);
const io = socketIO(server, {
	cors: {
		origin: "http://localhost:4200",
	},
});

setupRoutes(app);
setupSocket(io);

const PORT = process.env.PORT || 3000;
server.listen(PORT, async () => {
	console.log(`Server is now listening on PORT ${PORT}`);
});
