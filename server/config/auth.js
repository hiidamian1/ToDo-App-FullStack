module.exports = (req, res, next) => {
  console.log("auth.js");
  if (req.isAuthenticated()) {
    console.log("authenticated");
    return next();
  }
  console.log("not authenticated");
  res.status(401).send();
};