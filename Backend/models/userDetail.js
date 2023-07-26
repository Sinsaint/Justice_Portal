const mongoose = require('mongoose');

const UserDetailsSchema = new mongoose.Schema({
  uname: String,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model('UserInfo', UserDetailsSchema);

module.exports = User;