require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const todoRoutes = require('./routes/tasks');

//Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Use the todo routes
app.use('/api/tasks', todoRoutes);

//Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


