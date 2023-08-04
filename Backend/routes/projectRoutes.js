
const express = require('express');
const projectController = require('../controllers/projectController');
const upload = require('../middleware/multerMiddleware'); // Import the upload middleware


const router = express.Router();

router.post('/create', projectController.createProject);
router.post('/upload', upload.single('file'), projectController.uploadFile);

module.exports = router;
