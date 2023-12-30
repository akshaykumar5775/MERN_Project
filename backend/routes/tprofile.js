/** @format */

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("teacherprofile route"));

module.exports = router;
