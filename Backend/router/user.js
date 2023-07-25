// const express = require('express');
// const router = express.Router();
// const SignIn=require('../controllers/registerAndSignin')

// const app =express();

// //All routes realated to the SignIn/SignUp and Forget Password.

// app.post("/register")

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// User Sign-In API
router.post('/register',UserController.signUp)
router.post('/sign-in', UserController.signIn);

module.exports = router;
