const User = require('../models/userModel');

const authController = {};

// check db for existing user
authController.getUser = async (req, res, next) => {
  try {
    const user = await User.findOne();
    console.log(user);
    return next();
  } catch (error) {
    return next({
      log: `authController.getUser: ERROR: ${err}`,
      message: {
        err: 'Error occurred in authController.getUser. Check server logs for more details.',
      },
    });
  }
};

// create new user

module.exports = authController;
