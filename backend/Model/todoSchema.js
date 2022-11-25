const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({

    Title:{
        type : String,
        Required : true,
    },
    Tasks: []
});

module.exports = mongoose.model("todo",todoSchema);