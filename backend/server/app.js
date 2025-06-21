const express = require("express");
const cors = require("cors");
const { setupRoutes } = require("../routes/index");

const app = express();
app.use(
	cors({
		origin: "http://localhost",
		credentials: true,
		allowedHeaders: ["Content-Type", "Authorization"],
	})
);
app.use(express.json());
setupRoutes(app);

module.exports = app;
