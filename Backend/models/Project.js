
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  files: [String], // Array to store file URLs
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to user
});


const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
