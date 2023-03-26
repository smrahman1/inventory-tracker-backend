const createError = require('http-errors');
const UserService = require('../services/userService');
const passport = require('../middleware/passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/constants');

class UserController {
  static async getUser(req, res, next) {
    try {
      const user = await UserService.getUser(req.body.username);
      res.status(200).json(user);
    } catch (e) {
      next(createError(500, e.message));
    }
  }

  static async getUsers(req, res, next) {
    try {
      const users = await UserService.getUsers();
      res.status(200).json(users);
    } catch (e) {
      next(createError(500, e.message));
    }
  }

  static async register(req, res, next) {
    try {
      const newUser = await UserService.registerUser(
        req.body.username,
        req.body.password
      );
      res.status(newUser ? 200 : 400).json({
        status: newUser ? 'Registration successful' : 'Username taken',
      });
    } catch (e) {
      next(createError(500, e.message));
    }
  }

  static async login(req, res, next) {
    try {
      if (!req.body.username || !req.body.password) {
        res.status(400).send('No email/password supplied.');
        return;
      }

      const user = await UserService.getUser(req.body.username);

      if (!user || !user.username || !user.password) {
        res.status(400).send('Incorrect email/password');
        return;
      }

      const isMatch = await bcrypt.compare(req.body.password, user.password);

      if (!isMatch) {
        res.status(400).send('Incorrect email/password');
        return;
      }

      const token = jwt.sign(
        { id: user.id, username: user.username },
        JWT_SECRET,
        { expiresIn: '30d' }
      );

      res.cookie('jwt', token, {
        maxAge: 2592000000,
        httpOnly: true,
        secure: false, // SET TO TRUE FOR PROD
      });
      res.json({
        id: user.id,
        username: user.username,
      });
    } catch (e) {
      next(createError(500, e.message));
    }
  }

  static async logout(req, res, next) {
    try {
      if (!req.body.username) {
        res.status(400).send('Not logged in');
        return;
      }

      const user = await UserService.getUser(req.body.username);

      if (!user || !user.username) {
        res.status(400).send('Not logged in');
        return;
      }

      UserService.setIsActive(req.body.username, false);
      res.clearCookie('jwt').status(200).json({ status: 'Logout successful' });
    } catch (e) {
      next(createError(500, e.message));
    }
  }
}

module.exports = UserController;
