// Import the necessary modules from Express and other libraries
const express = require('express'); // Express is a web application framework for Node.js
const bodyParser = require('body-parser'); // bodyParser is used to parse incoming request bodies
const cors = require('cors'); // cors is a middleware that enables Cross-Origin Resource Sharing

// Create an instance of the Express application
const app = express();

// Use the cors middleware to allow cross-origin requests
app.use(cors());

// Use bodyParser to parse JSON bodies
app.use(bodyParser.json());

// Define a route to handle POST requests to the root URL
app.post('/', (req, res) => {
  // Log the received data to the console
  console.log(req.body);

  // Send a response back to the client
  res.send('Data received');
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});