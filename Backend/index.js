const express = require('express');
const app = express();
const connectDB = require('./config/db');
const bodyParser = require('body-parser'); // Import the database connection (mongoose.connection)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


connectDB(); // Connect to the database

const userRoutes = require('./routes/user'); // Import the user routes
app.use('/user', userRoutes); // Use the user routes under the '/user' path

const port = 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
