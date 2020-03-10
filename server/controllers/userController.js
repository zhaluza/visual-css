const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const userController = {};

// Handle user signup
userController.hashPassword = (req, res, next) => {
  const { password } = req.body;

  // Hash password
  bcrypt.genSalt(5, (err, salt) => {
    if (err) return next('Error occurred at genSalt');
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) return next('Error occurred at hash');
      hashedPassword = hash;
      res.locals.hash = hash;
      return next();
    });
  });
};

userController.createUser = (req, res, next) => {
  const { username, email } = req.body;

  // Create user
  User.create({ username, email, password: res.locals.hash }, (err, result) => {
    if (err) return next('Error occurred at userController.createUser');
    res.locals.result = result;
    return next();
  });
};

// Handle user signin
userController.signIn = (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({ email, password }, (err, user) => {
    if (err) return next('Error occurred at userController.signIn');
    res.locals.user = user;
    return next();
  });
};

// Update user favorites
userController.updateFavs = (req, res, next) => {
  const { favorite, id } = req.body;
  User.findOneAndUpdate(
    { id },
    { favorites: [...favorites, favorite] },
    (err, result) => {
      if (err) return next('Error occurred at userController.updateFavs');
      res.locals.result = result;
      return next();
    }
  );
};

// Delete user
userController.deleteUser = (req, res, next) => {
  const id = req.body;
  User.findOneAndDelete({ id }, (err, result) => {
    if (err) return next('Error occurred at userController.deleteUser');
    res.locals.result = result;
    return next();
  });
};

module.exports = userController;
