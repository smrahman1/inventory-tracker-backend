const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserService = require('../services/userService');

passport.use(
  new LocalStrategy({}, (username, password, done) =>
    UserService.passportLocalStrategyConnection(username, password, done)
  )
);

module.exports = passport;
