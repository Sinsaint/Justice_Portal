const express = require('express');
const app = express();
const connectDB = require('./db'); // Import the database connection function

// Other middleware and configurations can be added here

connectDB(); // Connect to the database

const userRoutes = require('./routes/user'); // Import the user routes
app.use('/user', userRoutes); // Use the user routes under the '/user' path

const port = 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

