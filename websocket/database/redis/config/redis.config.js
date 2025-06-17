const Redis = require("ioredis");

const redis = new Redis({
	host: process.env.REDIS_HOST,
	port: process.env.REDIS_PORT,
	username: process.env.REDIS_USERNAME,
	password: process.env.REDIS_PASSWORD,
});

redis.on("ready", () => {
	console.log("✅ Redis connection established successfully.");
});

redis.on("error", (err) => {
	console.error("❌ Redis connection error:", err);
});

module.exports = { redis };
