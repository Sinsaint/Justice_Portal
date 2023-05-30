const express= require('express');

const app=express();
const mongoose=require("mongoose");
app.use(express.json());
const cors=require("cors");
app.use(cors());
const bcryptjs=require("bcryptjs");

const jwt=require("jsonwebtoken");
const JWT_SECRET="hkhdfkhkshdfskk49594q9()dkfhwkh{}ewahkgkhks34975493qhg";

const url="mongodb+srv://JusticePortal:JusticePortal@justiceportal.7lpba3s.mongodb.net/?retryWrites=true&w=majority";


mongoose.connect(url,{
    useNewUrlParser:true
}).then(()=>{console.log("connected to database");})
.catch(e=>console.log(e))


app.listen(5000)

require("./userDetail");

const User =mongoose.model("UserInfo");

app.post("/register",async(req,res)=>{
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
});

//creating API for the log in.

app.post("/log-in",async(req,res)=>{
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
});