// controllers/authController.js
const User = require('../models/userDetail');

// POST /api/auth/forgotpassword

exports.forgotPassword = (req, res) => {
    const { email } = req.body;
  
    // Find the user by email in the MongoDB database using mongoose
    User.findOne({ email })
      .then(user => {
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
  
        // In a real scenario, you would send a password reset link via email to the user.
        // For this example, we'll just respond with a success message.
        res.json({ message: 'Password reset link sent to your email.' });
      })
      .catch(err => {
        console.error('Error finding user by email:', err);
        res.status(500).json({ message: 'Internal server error' });
      });
  };