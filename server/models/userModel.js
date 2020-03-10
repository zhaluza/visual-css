const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    // Set db name
    dbName: 'userList'
  })
  .then(() => console.log('Connected to MongoDB.'))
  .catch(err => console.error(err));

const Schema = mongoose.Schema;

// User Schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  favorites: [{ cssType: String, code: Array }]
});

const User = mongoose.model('user', userSchema);

module.exports = User;
