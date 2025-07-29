const mongoose = require("mongoose");

const tierModel = new mongoose.Schema({
    name: String,
    description: String
});

module.exports = mongoose.model("Tier", tierModel);