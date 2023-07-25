const express= require('express');

const app=express();
const mongoose=require("mongoose");
app.use(express.json());
const cors=require("cors");
app.use(cors());
const bcryptjs=require("bcryptjs");

const jwt=require("jsonwebtoken");
const JWT_SECRET="hkhdfkhkshdfskk49594q9()dkfhwkh{}ewahkgkhks34975493qhg";

const userRoutes = require('./router/user');
app.use('/user', userRoutes);


