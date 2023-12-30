/** @format */

const mongoose = require("mongoose");
const studentschema = new mongoose.Schema({
	userid: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = student = mongoose.model("student", studentschema);
