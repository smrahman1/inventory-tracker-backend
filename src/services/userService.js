const User = require('../db/models/user');

class UserService {
  static async getUser(username) {
    return User.getUser(username);
  }

  static async getUsers() {
    return User.getUsers();
  }

  static async registerUser(username, password) {
    return User.registerUser(username, password);
  }

  static async setIsActive(username, activeState) {
    return User.setIsActive(username, activeState);
  }

  static passportLocalStrategyConnection(username, password, done) {
    return User.passportLocalStrategyConnection(username, password, done);
  }

  static async isAdmin(username) {
    const user = await User.getUser(username);
    if (!user) {
      return false;
    }
    return user.isadmin;
  }
}

module.exports = UserService;
