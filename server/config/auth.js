module.exports = (req, res, next) => {
  if (req.isAuthenticated()) {
    console.log("authenticated");
    return next();
  }
  console.log("not authenticated");
  res.status(401).send();
};