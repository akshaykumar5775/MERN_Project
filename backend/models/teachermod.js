const mongoose = require("mongoose");
const teacherSchema = new mongoose.Schema({
    userid: {
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    Date: {
        type: Date,
        Default:Date.now
    }
});

module.exports = teacher = mongoose.model("teacher", teacherSchema);