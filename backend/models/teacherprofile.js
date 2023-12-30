/** @format */

const mongoose = require("mongoose");
const teacherprofileSchema = new mongoose.Schema({
	teacher: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "teachermod",
	},
	name: {
		type: String,
		required: true,
	},
	classteacher: {
		type: String,
		required: true,
	},
	salary: {
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

modules.export = teacherprofile = mongoose.model(
	"teacherP",
	teacherprofileSchema
);
