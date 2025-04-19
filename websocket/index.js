require("dotenv").config();

const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const verifyToken = require("./middleware/keycloak-websocket-auth");

const app = express();
app.use(express.json());
const server = http.createServer(app);
const io = socketIO(server, {
	cors: {
		origin: "http://localhost:4200",
	},
});

// io.use(verifyToken);
io.on("connect", (socket) => {
	console.log(`User ${socket.id} has connected`);
	socket.on("disconnect", () => {
		console.log(`User ${socket.id} has disconnected`);
	});
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, async () => {
	console.log(`Server is now listening on PORT ${PORT}`);
});
