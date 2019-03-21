const LocalStrategy = require("passport-local").Strategy;
const mongodb = require("mongodb");
const bcrypt = require("bcryptjs");
const connectMongoDB = require("../routes/api/connect");
const collection = "Users";

module.exports = (passport) => {
  passport.use(
    new LocalStrategy({usernameField: "username"}, async (username, password, done) => {
      const {collection: users, client} = await connectMongoDB(collection);
      const result = await users.findOne({"username": username});        

      client.close();

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
    //console.log(`serialize user: ${user}`);
    done(null, user._id);
  });

  passport.deserializeUser( async (id, done) => {
    try {
      const {collection: users, client} = await connectMongoDB(collection);
      const result = await users.findOne({"_id": new mongodb.ObjectID(id)});    
      client.close();
      
      done(null, result);
    } catch (err) {
      done(err, false);
    } 
  })
}