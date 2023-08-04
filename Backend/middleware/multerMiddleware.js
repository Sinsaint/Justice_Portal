const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Define the destination folder for uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '_' + file.originalname); // Define the filename for uploaded files
  },
});

const upload = multer({ storage });

module.exports = upload;
