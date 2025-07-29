const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({ 
    name: String, 
    lastName: String, 
    description: String
});

module.exports = mongoose.model("Teacher", teacherSchema);