const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRoutes');

const app = express();

const PORT = 3000;

// Handle parsing request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle requests for client files
app.use(express.static(path.resolve(__dirname, '../client')));

// Define route handlers
app.use('/users', userRouter);

// TODO: Global error handler

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
}

// Handle unknown route requests
app.use((req, res) => res.sendStatus(404));

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
