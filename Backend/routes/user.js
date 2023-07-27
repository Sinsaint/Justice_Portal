

const express = require('express');
//const passport = require("passport");
const router = express.Router();
const UserController = require('../controllers/registerAndSignin');
const UserForgotpass = require('../controllers/forgotpass');
const CLIENT_URL = "http://localhost:3000/";

// User Sign-Up API
router.post('/register', UserController.signUp);

// User Sign-In API
router.post('/sign-in', UserController.signIn);

// User Forget pass API
router.post('/forgotpass', UserForgotpass.forgotPassword);

//gooogle auth


module.exports = router;
