const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({

    Title:{
        Type : String,
        Required : true,
    },
    Tasks: [Tasks],
});

exports.module = mongoose.model("todo",todoSchema);