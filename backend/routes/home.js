/** @format */

const express = require("express");
const router = express.Router();

router.get('/', (req, res) => res.send('home route'));
router.post("/",);

module.exports = router;