require("dotenv").config();
const express = require("express");
const http = require("http");
const verifyToken = require("./middleware/api-auth");
const client = require("./database/database-connection");
const userRoutes = require("./routes/user-routes");

const app = express();
app.use(express.json());
const server = http.createServer(app);

app.use("/api", userRoutes);

const PORT = process.env.BACKEND_PORT || 4000;
server.listen(PORT, async () => {
	console.log(`Server is now listening on PORT ${PORT}`);
});
