const User = require('../db/models/user');

class UserService {
  static async getUser(username) {
    return await User.getUser(username);
  }

  static async getUsers() {
    return await User.getUsers();
  }

  static async registerUser(username, password) {
    return await User.registerUser(username, password);
  }

  static async setIsActive(username, activeState) {
    return await User.setIsActive(username, activeState);
  }

  static passportLocalStrategyConnection(username, password, done) {
    return User.passportLocalStrategyConnection(username, password, done);
  }
}

module.exports = UserService;
