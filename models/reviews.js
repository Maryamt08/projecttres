const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    //title: {type:String, require:true},
    nail_id: {type:mongoose.Schema.Types.ObjectId, ref:"NailTech"},
    review: {type:String, require:true},
    name: {type:String, require:true},
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    //selectedFile: {type:String},
    likes: { type: String, default: [] },
    
    star:{
        type: Number,
        default: 5
    },
    

},{timestamps:true}
)

//create model
var Reviews = mongoose.model('Reviews', postSchema);
//export reviews
export default Reviews;