/** @format */

const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Teacher = require("../models/teachermod");
const config = require("config");
const auth = require("../middleware/auth");
const jwt = require("jsonwebtoken");

router.get("/", auth, async(req, res) => {
    try {
        const teacher = await Teacher.findById(req.user.id);
        res.json(teacher);
    }
    catch (err) {
        console.log(err.message);
        res.status(400).send("Server Error");
    }
});

router.post(
	"/",

	body("userid", "userid is required").notEmpty(),
	body("password", "password is required").notEmpty(),

	async (req, res) => {
		console.log(req.body);
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

        try {
            const { userid, password } = req.body;
			let teacher = await Teacher.findOne({ userid: userid });
			if (!teacher) {
				res.status(400).json({ errors: "Invalid UserId" });
			}
			const isMatch = password === teacher.password;
			if (!isMatch) {
				res.status(400).json({ errors: "Invalid Password" });
			}

			const payload = {
				user: {
					id: teacher.id,
				},
			};

			jwt.sign(
				payload,
				config.get("jwtSecret"),
				{ expiresIn: 3600000 },
				(err, token) => {
					if (err) throw err;

					console.log("Teacher Logged in");
					console.log(`${token}`);
					res.json({ token });
				}
			);
		} catch (err) {
			console.log(err.message);
			res.status(400).send("Server Error");
		}
	}
);

module.exports = router;
