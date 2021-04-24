const router = require("express").Router();
const User = require("../../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validate } = require('express-validation')
let {registerValidation,loginValidation} = require('./user.validation');
let {responsHelper} = require('./../../common/responseHelper');

//signup
router.get("/",async(req,res)=>{
  res.send("test");
})

router.post("/register", validate(registerValidation), 
    async (req,res)=>{
    const {email, password} = req.body;
    const existingUser = await User.findOne({ email });
    if(existingUser) {
      return responsHelper(req,res,'user is exits');
    }
    const salt = await bcrypt.genSalt(5);
    const passwordHash = await bcrypt.hash(password, salt);
    // save a new user account to the db
    const newUser = new User({
      email,
      password:passwordHash
    });
    await newUser.save();
    console.log(newUser);
    return responsHelper(req,res,null,newUser);
});

// log in

router.post("/login", 
 validate(loginValidation),
 async (req, res) => {
    try {
      const { email, password } = req.body;
      let existingUser = await User.findOne({ email });
      if (!existingUser){
        return responsHelper(req,res,"Wrong email or password.",null,401);
      }
      console.log(existingUser);
      const passwordCorrect = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (!passwordCorrect) {
        return responsHelper(req,res,"Wrong email or password.",null,401);
      }
      // sign the token
      const token = jwt.sign(
        {
          user: existingUser._id,
        },
        process.env.JWT_SECRET||"125125"
      )
      // send the token in a HTTP-only cookie
      let user = existingUser.toObject();
      delete user.password ;
      user.token = token ;
      responsHelper(req,res,null,user);
    } catch (err) {
      console.error(err);
      responsHelper(req,res,err);
    }
  });


module.exports = router;