/** @format */

const jwt = require("jsonwebtoken");
const config = require("config");

const auth = (req, res, next) => {
	const token = req.header("token-auth");

	if (!token) {
		return res.status(401).json({ msg: "no token, authoristaion denied" });
	}
	try {
		const decoded = jwt.verify(token, config.get("jwtSecret"));

		console.log("Decoded");
		console.log(decoded);
		req.user = decoded.user;
		next();
	} catch (err) {
		res.status(401).json({ msg: "Token is not valid" });
	}
};
module.exports = auth;
