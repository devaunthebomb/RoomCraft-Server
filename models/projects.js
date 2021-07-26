const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    projectName: {
        type: String
    },
    imageUrl: {
        type: String
    }
}, {timestamps: true})

module.exports = mongoose.model("MyProjects", schema);