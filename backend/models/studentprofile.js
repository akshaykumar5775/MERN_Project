/** @format */

const mongoose = require("mongoose");
const studentprofileSchema = new mongoose.Schema({
	student: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "studentmod",
	},
	name: {
		type: String,
		required: true,
	},
	class: {
		type: String,
		required: true,
	},
	feestatus: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
	},
	contact: {
		type: String,
	},
	address: {
		locality: {
			type: String,
		},
		city: {
			type: String,
		},
		state: {
			type: String,
		},
	},
});

module.exports = studentprofile = mongoose.model(
	"studentP",
	studentprofileSchema
);
