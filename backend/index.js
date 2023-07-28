const express = require('express');
const app = express();
const port = 5000; // You can choose any available port number

// Define a route for the root URL '/'
app.get('/', (req, res) => {
  res.send('Hello, World! This is my Express server!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
