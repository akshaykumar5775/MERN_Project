/** @format */

//connect the database to the server.
const mongoose = require("mongoose"); //modules imported

const config = require("config");

const db = config.get("mongoURI"); //fetch the fields from config/default.json

const connectDB = async () => {
	try {
		await mongoose.connect(db); //monngose library used connect function to return the connection to the database

		console.log("Database Connected");
	} catch (err) {
		console.log(err.message);
		console.log("Database Not connected");
		// Exit the process with status code 1 meaning failure.
		process.exit(1);
	}
};

module.exports = connectDB;
