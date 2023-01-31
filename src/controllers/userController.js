const UserService = require('../services/userService');
const createError = require('http-errors');
const passport = require('../middleware/passport');

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
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        res.status(500).json({ status: 'Internal server error' });
      }
      if (!user) {
        res.status(404).json({ status: 'Incorrect username/password' });
      }
      if (user) {
        try {
          UserService.setIsActive(req.body.username, true);
          res.status(200).json({ status: 'Login successful' });
        } catch (e) {
          next(createError(500, e.message));
        }
      }
    })(req, res, next);
  }

  static async logout(req, res, next) {
    try {
      UserService.setIsActive(req.body.username, false);
      res.status(200).json({ status: 'Logout successful' });
    } catch (e) {
      next(createError(500, e.message));
    }
  }
}

module.exports = UserController;
