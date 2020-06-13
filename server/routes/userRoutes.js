const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// Verify user identity (check cookies)
router.get('/', userController.verifyCookies, (req, res) => {
  return res.status(200).send(res.locals.cookieId);
});

// Create new user
router.post(
  '/',
  userController.hashPassword,
  userController.createUser,
  userController.setCookies,
  (req, res) => {
    return res.status(200).send(res.locals.result);
  }
);

// User signin
router.post(
  '/auth',
  userController.hashPassword,
  userController.signIn,
  userController.setCookies,
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
