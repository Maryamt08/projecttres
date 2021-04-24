const mongoose = require("mongoose");

//create user schema
const nailTechSchema = new mongoose.Schema({
//data field

// link to userModel.
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    image:{
        type:String
    },

    description:{ type:String},

    services: [{type:String }],

    address:{
        type:String
    },
    star:{type:Number, default:5},
    vote_number:{type: Number, default:0}

},{timestamps:true})


//create model
const NailTech = mongoose.model("nailTech", nailTechSchema);


// export User
module.exports = NailTech;