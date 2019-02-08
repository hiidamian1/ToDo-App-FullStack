const LocalStrategy = require('passport-local').Strategy;
const mongodb = require('mongodb');
const bcrypt = require('bcryptjs');
const usersAPI = require('../routes/api/users');


module.exports = (passport) => {
    passport.use(
        new LocalStrategy({usernameField: 'username'}, async (username, password, done) => {
            
            const users = await usersAPI.connectMongoDB();
            const result = await users.findOne({"username": username});        
            //console.log(result);

            if (!result) {
                return done(null, false, {message: 'email not registered'});
            } else {
                bcrypt.compare(password, result.password, (err, match) => {
                    if (err) {
                        console.log("err");
                        throw err;
                    }

                    if (!match) {
                        console.log("mismatch");
                        return done(null, false, {message: 'password does not match username'});
                    } else {
                        console.log("good");
                        return done(null, result);
                    }
                });
            }
        })
    );

    passport.serializeUser( (user, done) => {
        console.log(user);
        done(null, user._id);
    });

    passport.deserializeUser( async (id, done) => {
        try {
            const users = await usersAPI.connectMongoDB();
            const result = await users.findOne({"_id": new mongodb.ObjectID(id)});    
            console.log(result);
            done(null, result);
        } catch (err) {
            done(err, false);
        }
        
    })
}