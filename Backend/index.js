const express = require('express');
const app = express();
const connectDB = require('./config/db');
const bodyParser = require('body-parser'); // Import the database connection (mongoose.connection)
const multer = require('multer');
connectDB(); 
const userRoutes = require('./routes/user'); // Import the user routes
const projectRoutes = require('./routes/projectRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Connect to the database

app.use('/user', userRoutes); // Use the user routes under the '/user' path
app.use('/projects', projectRoutes);

const port = 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

