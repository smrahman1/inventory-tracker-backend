function loginRedirect(req, res, next) {
  if (req.user)
    return res.status(401).json({ status: 'You are already logged in' });
  return next();
}

module.exports = { loginRedirect };
