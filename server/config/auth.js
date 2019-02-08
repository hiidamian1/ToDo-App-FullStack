module.exports = (req, res, next) => {
    if (req.isAuthenticated()) {
        console.log("authenticated");
        return next();
    }
    console.log("redirect");
    res.redirect('/login');
};