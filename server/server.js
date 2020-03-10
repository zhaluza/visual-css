const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3000;

// Handle parsing request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle requests for client files

// Define route handlers

// Handle unknown route requests
app.use((req, res) => res.sendStatus(404));

// Global error handler

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
