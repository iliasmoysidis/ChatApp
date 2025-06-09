require("dotenv").config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const setupRoutes = require("./routes/index");

const app = express();
app.use(cors({ origin: "http://localhost:4200" }));
app.use(express.json());
const server = http.createServer(app);

setupRoutes(app);

const PORT = process.env.BACKEND_PORT || 4000;
server.listen(PORT, async () => {
	console.log(`Server is now listening on PORT ${PORT}`);
});
