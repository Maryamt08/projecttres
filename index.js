const express = require("express");
const app = express();
const dotenv = require("dotenv");
var mongoose = require('mongoose');
const {  ValidationError } = require('express-validation')
dotenv.config();
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(express.urlencoded({extended:true}));
app.use(express.json()); // apply any common request
app.use(cookieParser());
app.use(cors());

//setup server
const PORT = process.env.PORT || 5000;
//connect to mongoDB

mongoose.connect(process.env.MDB_CONNECT, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true

    },(err)=>{
    if (err)
        return console.error(err);
        console.log("Connected to MongoDB");
})


//const PORT = 5000;
//Tis8NVcWIk8Vev5l

//mongodb+srv://ducdinh:<password>@cluster0.yxqx8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

//MDB_CONNECT=mongodb+srv://ducdinh:Tis8NVcWIk8Vev5l@cluster0.yxqx8.mongodb.net/nailedit?retryWrites=true&w=majority


//JWT_SECRET =!cXK]xbjt@85r4$EB_T~p\YsQjnh/},Y

app.get("/", (req,res)=>{
    res.send("../client/index.js");
})
// setup routes
app.use("/", require("./routers/index"));
app.use(function(err, req, res, next) {
    if (err instanceof ValidationError) {
      return res.status(401).json({
          code:401,
          message:err
      })
    }
  
    return res.status(400).json({
        code:400,
        message:err
    })
  })
app.listen(PORT, ()=> console.log(`Server start on Port: ${PORT}`));





