const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    projectName: String,
    imageUrl: String,
    projectDescription: String,
    projectTag: String,
    itemsPlacedInRoom: Number,
    projectNumber: Number
}, {timestamps: true})

module.exports = mongoose.model("MyProjects", schema);