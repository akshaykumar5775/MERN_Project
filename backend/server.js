/** @format */

const express = require("express"); //imported express module
const connectDB = require("./config/db"); //function exported from db file into const variable

//object for server module
const app = express();

app.use(express.json({ extended: false }));

// Calling function to connect to database
connectDB();

// app.get("/", (req, res) => res.send("API Running"));     request and response initiated
app.use("/", require("./routes/home")); // imported the routermodule exported
app.use("/about", require("./routes/about"));
app.use("/studprofile", require("./routes/studprofile"));
app.use("/tprofile", require("./routes/tprofile"));
app.use("/circular", require("./routes/circular"));
app.use("/contactus", require("./routes/contactus"));
app.use("/studentauth", require("./routes/studentauth"));
app.use("/teacherauth", require("./routes/teacherauth"));

const PORT = process.env.PORT || 5000; //Random Port Variable selection from system or local hosting at port no 5000

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
