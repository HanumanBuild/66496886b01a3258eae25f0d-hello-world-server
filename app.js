const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
const connectDB = require('./db');
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});