const mongoose = require("mongoose");

//create user schema
const userSchema = new mongoose.Schema({
//data field
    email: {type:String, require:true}, // validation
    password: {type: String, require: true},
    role:{
        type:Number,
        default:1
    },
    avatar:{
        type:String
    }
},{timestamps:true})


//create model
const User = mongoose.model("user", userSchema);


// export User
module.exports = User;



