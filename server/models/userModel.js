const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

try {
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'visual-css',
  });
  console.log('Connected to MongoDB');
} catch (error) {
  console.error(err);
}
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  snippets: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
