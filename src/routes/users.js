const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const { loginRedirect } = require('../middleware/helpers');

// Get all users
router.get('/', UserController.getUsers);

// Get current user's information
router.get('/me', UserController.getUser);

// Register
router.post('/register', UserController.register);

// Login
router.post('/login', loginRedirect, UserController.login);

// Logout
router.post('/logout', UserController.logout);

module.exports = router;
