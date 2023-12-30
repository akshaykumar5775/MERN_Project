/** @format */

const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const profile = require("../models/studentProfile");
const student = require("../models/studentmod");
// @desc Get current user profile
// @route Get /routes/sprofile/me

router.get("/me", auth , async (req, res) => {
	try {
		const profile = await profile.findone({ student : req.user.id });
		if (!profile) {
			return res.status(400).json({ msg: "There is No profile for this user" });
		}
		res.json(profile);
	} catch (err) {
		console.log(err.message);
		res.status(500).send("Server Error");
	}
});

module.exports = router;
