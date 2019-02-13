const express = require("express");
const bcrypt = require("bcryptjs");
const passport = require("passport");

const router = express.Router();
const auth = require("../../config/auth");
const connectMongoDB = require("./connect");
const collection = "Users";

router.post("/register", async (req, res) => {
    const users = await connectMongoDB(collection);

    const result = await users.find({"username": req.body.username}).toArray();
    
    if (result.length == 0){
        bcrypt.hash(req.body.password, 10, async (err, hash) => {
            if (err) {
                res.status(418).send();
            } else {
                await users.insertOne({"username": req.body.username, "password": hash});
                res.status(201).send();
            }
        });
    } else {
        res.status(418).send();
    }
});

router.post("/login", passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login" 
    })
);

router.get("/logout", (req, res) => {
    req.logOut();
    res.status(200).send();
})

router.get("/authenticate", auth, (req, res) => {
    res.status(200).send();
});

module.exports = router;