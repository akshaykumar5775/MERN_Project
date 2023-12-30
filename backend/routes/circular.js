/** @format */

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("Circular route"));

module.exports = router;