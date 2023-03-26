const passport = require('passport');
const passportJWT = require('passport-jwt');

const { JWT_SECRET } = require('../utils/constants');

module.exports = function configurePassport(app) {
  const cookieExtractor = (req) => {
    let jwt = null;

    if (req && req.cookies) {
      jwt = req.cookies['jwt'];
    }

    return jwt;
  };
  passport.use(
    new passportJWT.Strategy(
      {
        jwtFromRequest: cookieExtractor,
        secretOrKey: JWT_SECRET,
      },
      (payload, done) => {
        try {
          done(null, payload);
        } catch (err) {
          done;
        }
      }
    )
  );

  app.use(passport.initialize());
};
