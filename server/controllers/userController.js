const User = require('../models/userModel');

const userController = {};

// Handle user signup
userController.createUser = (req, res, next) => {
  const { username, email, password } = req.body;
  User.create({ username, email, password }, (err, result) => {
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
