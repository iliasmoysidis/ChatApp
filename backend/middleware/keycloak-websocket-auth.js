const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");
const util = require("util");

const KEYCLOAK_DOMAIN = process.env.KEYCLOAK_DOMAIN;
const REALM_NAME = process.env.REALM_NAME;
const ENCRYPTION_ALGORITHM = process.env.ENCRYPTION_ALGORITHM;
const jwksUri = `${KEYCLOAK_DOMAIN}/realms/${REALM_NAME}/protocol/openid-connect/certs`;

const client = jwksClient({ jwksUri });
const getSigningKey = util.promisify(client.getSigningKey).bind(client);

const verifyAsync = util.promisify(jwt.verify);

function emitSocketErrorAndDisconnect(socket, code, message) {
	console.log(message);
	socket.emit("error", { code: code, message: message });
	return socket.disconnect(true);
}

async function getKey(kid) {
	try {
		const key = await getSigningKey(kid);
		return key.publicKey || key.rsaPublicKey;
	} catch (error) {
		throw new Error(`Error retrieving public key: ${error.message}`);
	}
}

async function verifyJwt(token, publicKey) {
	const options = {
		algorithms: [ENCRYPTION_ALGORITHM],
		issuer: `http://chatapp.it.com/auth/realms/${REALM_NAME}`,
		audience: undefined,
	};

	return await verifyAsync(token, publicKey, options);
}

async function verifyToken(socket, next) {
	try {
		const token = socket.handshake.auth?.token;
		if (!token) {
			return emitSocketErrorAndDisconnect(
				socket,
				401,
				"Token is required"
			);
		}

		const decoded = jwt.decode(token, { complete: true });
		if (!decoded || !decoded.header.kid) {
			return emitSocketErrorAndDisconnect(socket, 401, "Invalid token");
		}

		const kid = decoded.header.kid;
		const publicKey = await getKey(kid);

		const decodedToken = await verifyJwt(token, publicKey);
		socket.data.decodedToken = decodedToken;

		next();
	} catch (error) {
		return emitSocketErrorAndDisconnect(socket, 500, error.message);
	}
}

function checkTokenEmail(socket, next) {
	try {
		const decodedToken = socket.data.decodedToken;
		const email = decodedToken["email"];
		if (!email) {
			return emitSocketErrorAndDisconnect(
				socket,
				400,
				"Email not found in token"
			);
		}
		socket.data.email = email;

		next();
	} catch (error) {
		return emitSocketErrorAndDisconnect(
			socket,
			500,
			"Internal server error"
		);
	}
}

module.exports = { verifyToken, checkTokenEmail };
