const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
        userID:{
            type : mongoose.Schema.Types.ObjectId,
            ref : "user",
            Required :true,
            unique : true,
        },
    Title:{
        type : String,
        Required : true,
    },
    Tasks: [String]
},
{
    timestamps : true
});

module.exports = mongoose.model("todo",todoSchema);