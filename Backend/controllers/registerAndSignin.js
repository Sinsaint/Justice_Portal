




const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userDetail');

const JWT_SECRET = 'hkhdfkhkshdfskk49594q9()dkfhwkh{}ewahkgkhks34975493qhg';

exports.signUp = async (req, res) => {
  const { name, email, password } = req.body;
  
  try {
    const encryptedPassword = await bcryptjs.hash(password, 10);

    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.json({ error: 'User Exists' });
    }

    await User.create({
      uname: name,
      email,
      password: encryptedPassword,
    });

    res.send({ status: 'Registration successfully Done' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.send({ status: 'error' });
  }
};

exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: 'User Not Found' });
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return res.json({ error: 'Invalid Password' });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET);

    return res.json({ status: 'Logged in successfully', data: token });
  } catch (error) {
    console.error('Error during sign-in:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};


