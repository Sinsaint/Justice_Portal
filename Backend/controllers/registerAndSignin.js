

require("../models/userDetail");
const jwt = require('jsonwebtoken');

const User =mongoose.model("UserInfo");

exports.signUp = async (req, res) =>{
    const {name,email,password}=req.body;
    const encryptedPassword= await bcryptjs.hash(password,10)
    try{
        const olduser=await User.findOne({email});
        if(olduser)
        {
            return res.json({error:"User Exixts"});
        }
        await User.create({
            uname:name,
            email,
            password:encryptedPassword,
        });
        res.send({status:"Resistration successfully Done"});
    }   catch (error){
        res.send({status:"error"});
    }
};

//creating API for the log in.

exports.signIn = async (req, res) =>{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(!user){
        return res.json({error:"User Not Found"});
    }
    if(await bcryptjs.compare(password,user.password)){
        const token=jwt.sign({},JWT_SECRET);
        if(res.status(201)){
            return res.json({status:"Logged in successfully", data:token });
        }else{
            return res.json({error:"Error" });
        }
    }
    res.json({status:"Error", error:"Invalid Password"});
};

