const LocalStrategy = require("passport-local").Strategy;
const mongodb = require("mongodb");
const bcrypt = require("bcryptjs");
const {connectMongoDB, client} = require("../routes/api/connect");
const collection = "Users";

module.exports = (passport) => {
    passport.use(
        new LocalStrategy({usernameField: "username"}, async (username, password, done) => {
            const users = await connectMongoDB(collection);
            const result = await users.findOne({"username": username});        

            if (!result) {
                return done(null, false, {message: "email not registered"});
            }
            bcrypt.compare(password, result.password, (err, match) => {
                if (err) {
                    throw err;
                }

                if (!match) {
                    return done(null, false, {message: "password does not match username"});
                }
                return done(null, result);
            });
        })
    );

    passport.serializeUser( (user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser( async (id, done) => {
        try {
            const users = await connectMongoDB(collection);
            const result = await users.findOne({"_id": new mongodb.ObjectID(id)});    
            done(null, result);
        } catch (err) {
            done(err, false);
        }
        
    })
}