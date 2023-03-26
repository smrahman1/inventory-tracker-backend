const UserService = require('../services/userService');

module.exports = function adminOnly(req, res, next) {
  if (!req.user.storeId) {
    res.status(401).send();
    return;
  }

  UserService.isAdmin(req.user.storeId).then((isAdmin) => {
    if (!isAdmin) {
      res.status(403).send();
      return;
    }
    next();
  });
};
