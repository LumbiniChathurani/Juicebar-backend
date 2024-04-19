// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of Express app
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Define routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Define routes
app.get('/about', (req, res) => {
    res.send('this is about');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
