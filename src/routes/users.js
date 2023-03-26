const express = require('express');

const router = express.Router();
const UserController = require('../controllers/userController');
const { loginRedirect } = require('../middleware/helpers');
const passport = require('passport');
const adminOnly = require('../middleware/adminOnlyRoute');

// Get all users
router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  adminOnly,
  UserController.getUsers
);

// Get current user's information
router.post(
  '/me',
  passport.authenticate('jwt', { session: false }),
  UserController.getUser
);

// Register
router.post(
  '/register',
  passport.authenticate('jwt', { session: false }),
  adminOnly,
  UserController.register
);

// Login
router.post('/login', loginRedirect, UserController.login);

// Logout
router.post('/logout', UserController.logout);

module.exports = router;
