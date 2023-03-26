const UserService = require('../services/userService');

module.exports = function adminOnly(req, res, next) {
  console.log(req.user);
  if (!req.user.username) {
    res.status(401).send();
    return;
  }

  UserService.isAdmin(req.user.username).then((isAdmin) => {
    if (!isAdmin) {
      res.status(403).send();
      return;
    }
    next();
  });
};
