const express = require('express');
const passport = require("passport");
const router = express.Router();
const UserController = require('../controllers/registerAndSignin');
const CLIENT_URL = "http://localhost:3000/";

// User Sign-Up API
router.post('/register', UserController.signUp);

// User Sign-In API
router.post('/sign-in', UserController.signIn);

//gooogle auth
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", 
                        {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = router;
