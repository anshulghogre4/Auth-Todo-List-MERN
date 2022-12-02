const mongoose = require("mongoose");

const userSchema =  new mongoose.Schema({

firstName :{
    type : String,
    required: true,
},
lastName :{
    type : String,
    default : null,
},
email :{
    type : String,
   // required: [true, "this field is required"]
   unique : true,
},
password :{
    type : String,
    required: [true, "this field is required"],
    minLength : [8,"Password length must be atleast 8 characters!"]
},

token :{
    type : String,
}
})

module.exports = mongoose.model("todouser",userSchema);