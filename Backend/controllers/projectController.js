const Project = require('../models/Project');
exports.createProject = async (req, res) => {
  
    const { title, description } = req.body;
  
  try {
    const project = await Project.create({
      title,
      description,
    });


    res.status(201).json({ message: 'Project created successfully', project });
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.uploadFile = async (req, res) => {
  const projectId = req.params.projectId; // Assuming the project ID is passed as a URL parameter
  const fileUrl = req.file.path; // Assuming multer middleware is used for file uploads

  try {
    const project = await Project.findByIdAndUpdate(
      projectId,
      { $push: { files: fileUrl } }, // Add the file URL to the project's files array
      { new: true } // Return the updated project
    );

    res.json({ message: 'File uploaded successfully', project });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

