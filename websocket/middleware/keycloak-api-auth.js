const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");
const util = require("util");

const KEYCLOAK_DOMAIN = process.env.KEYCLOAK_DOMAIN;
const REALM_NAME = process.env.REALM_NAME;
const ENCRYPTION_ALGORITHM = process.env.ENCRYPTION_ALGORITHM;
const jwksUri = `${KEYCLOAK_DOMAIN}/realms/${REALM_NAME}/protocol/openid-connect/certs`;

const client = jwksClient({
	jwksUri: jwksUri,
});

const verifyAsync = util.promisify(jwt.verify);
const getSigningKey = util.promisify(client.getSigningKey).bind(client);

async function getKey(kid) {
	try {
		const key = await getSigningKey(kid);
		return key.publicKey || key.rsaPublicKey;
	} catch (error) {
		throw new Error("Error retrieving the public key");
	}
}

async function verifyJwt(token, publicKey) {
	const options = {
		algorithms: [ENCRYPTION_ALGORITHM],
		issuer: `http://localhost:8080/realms/${REALM_NAME}`,
		audience: undefined,
	};

	return await verifyAsync(token, publicKey, options);
}

async function verifyToken(req, res, next) {
	try {
		const token = req.headers.authorization?.split(" ")[1];
		if (!token) {
			return res.status(401).send("Token is required");
		}

		const decoded = jwt.decode(token, { complete: true });
		if (!decoded || !decoded.header.kid) {
			return res.status(401).send("Invalid token");
		}

		const kid = decoded.header.kid;
		const publicKey = await getKey(kid);
		const decodedToken = await verifyJwt(token, publicKey);

		req.user = decodedToken;
		next();
	} catch (error) {
		return res.status(401).send("Invalid token");
	}
}

function checkTokenEmail(req, res, next) {
	try {
		const decodedToken = req.user;
		const email = decodedToken["email"];
		if (!email) {
			return res.status(400).send("Email not found in token");
		}

		req.email = email;
		next();
	} catch (error) {
		return res.status(500).send("Internal server error");
	}
}

module.exports = { verifyToken, checkTokenEmail };
