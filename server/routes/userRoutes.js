const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// Create new user
router.post(
  '/',
  userController.hashPassword,
  userController.createUser,
  (req, res) => {
    return res.status(200).send(res.locals.result);
  }
);

// User signin
router.post(
  '/auth',
  userController.hashPassword,
  userController.signIn,
  (req, res) => {
    return res.status(200).send(res.locals.user);
  }
);

// Update user favorites
router.patch('/', userController.updateFavs, (req, res) => {
  return res.status(200).send(res.locals.result);
});

// Delete user
router.delete('/', userController.deleteUser, (req, res) => {
  return res.status(200).send(res.locals.result);
});

module.exports = router;
