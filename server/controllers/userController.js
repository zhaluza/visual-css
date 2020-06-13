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
    res.locals.id = result._id;
    return next();
  });
};

// Handle user signin:

userController.signIn = (req, res, next) => {
  const { username, email, password } = req.body;
  // Verify username first
  User.findOne({ username, email }, (err, user) => {
    if (err) return next('Error occurred at userController.signIn');

    // test matching password
    user.comparePassword(password, (err, isMatch) => {
      if (err) return next('Error occurred at userController.signIn');
      console.log(password, isMatch);
      res.locals.user = user;
      res.locals.id = user.id;
      return next();
    });
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

// Set cookies for user
userController.setCookies = (req, res, next) => {
  console.log('id: ', res.locals.id);
  res.cookie('test', 'test');
  res.cookie('visualcss', res.locals.id);
  console.log('cookie set');
  return next();
};

// Check cookie when user accesses page
userController.verifyCookies = (req, res, next) => {
  if (req.cookies.visualcss) {
    user.findOne({id: req.cookies.visualcss}, (err, result) => {
      
    })
    res.locals.cookieId = req.cookies.visualcss;
    next();
  } else {
    next('no cookie found');
  }
};

module.exports = userController;
