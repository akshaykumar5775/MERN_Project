/** @format */

const express = require("express");
const router = express.Router();
const Student = require("../models/studentmod");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { body, validationResult } = require("express-validator");
const auth = require("../middleware/auth");


// @route  /studentauth
// @desc  get user token verified
// @access Private
router.get("/", auth, async (req, res) => {
	try {
		const student = await Student.findById(req.user.id);
		res.json(student);
	} catch (err) {
		console.log(err.message);
		res.status(500).send("server error");
	}
});

// @route /studentauth
// @desc  Login student
// @access public
router.post(
	"/",
	//Data Validation
	body("userid", "userid is required").notEmpty(),
	body("password", "password is required").notEmpty(),
	//respond sending
	async (req, res) => {
		console.log(req.body);
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { userid, password } = req.body;
		try {
			let student = await Student.findOne({ userid: userid });

			if (!student) {
				res.status(400).json({ errors: [{ msg: "Invalid Credential" }] });
			}

			const isMatch = password === student.password;
			// const isMatch = await bcrypt.compare(password, student.password);
			if (!isMatch) {
				res.status(400).json({ errors: [{ msg: "Invalid Password" }] });
			}

			const payload = {
				user: {
					id: student.id,
				},
			};
			jwt.sign(
				payload,
				config.get("jwtSecret"),
				{ expiresIn: 36000000 },
				(err, token) => {
					if (err) throw err;

					console.log("Student Logged in");
					console.log(`${token}`);
					res.json({ token });
				}
			);
		} catch (err) {
			console.log(err.message);
			res.status(400).send("server error");
		}

		
		
	}
);

module.exports = router;
