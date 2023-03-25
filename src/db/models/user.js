const bcrypt = require('bcrypt');
const database = require('../database_connection');

class User {
  static async getUser(username) {
    return await database('users')
      .where({ username })
      .first()
      .then((row) => row);
  }

  static async getUsers() {
    return await database('users').then((users) => response.json(users)[0]);
  }

  static async registerUser(username, password) {
    const availableUser = await this.getUser(username);
    if (availableUser != undefined) return false;
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, function (err, hash) {
        database('users')
          .where({ username })
          .then((data) => {
            if (data.length === 0) {
              database('users')
                .insert({ username: username, password: hash, isactive: false })
                .catch((err) => console.log(err));
            }
          });
      });
    });
    return true;
  }

  static async setIsActive(username, activeState) {
    const availableUser = await this.getUser(username);
    if (activeState === availableUser.isactive) return;
    await database('users')
      .where({ username })
      .first()
      .update({ isactive: activeState });
  }

  static passportLocalStrategyConnection(username, password, done) {
    database('users')
      .where({ username })
      .first()
      .then((user) => {
        if (!user) return done(null, false);
        return !bcrypt.compareSync(password, user.password)
          ? done(null, false)
          : done(null, user);
      })
      .catch((err) => done(err));
  }
}

module.exports = User;
