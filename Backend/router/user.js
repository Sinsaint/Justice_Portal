const express = require('express');
const router = express.Router();
const UserController = require('../controllers/registerAndSignin');

// User Sign-Up API
router.post('/register', UserController.signUp);

// User Sign-In API
router.post('/sign-in', UserController.signIn);

module.exports = router;
