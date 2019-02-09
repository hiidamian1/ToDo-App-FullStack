const express = require('express');
const mongodb = require('mongodb');
const bcrypt = require('bcryptjs');
const passport = require('passport');

const router = express.Router();
const auth = require('../../config/auth');

router.post('/register', async (req, res) => {
    const users = await connectMongoDB();

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

router.post('/login', passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login' 
    })
);

router.get('/logout', (req, res) => {
    req.logOut();
    res.status(200).send();
})

router.get('/authenticate', auth, (req, res) => {
    res.status(200).send();
});

async function connectMongoDB(){
	const client = await mongodb.MongoClient.connect(
		'mongodb+srv://hiidamian1:Cymadeagle1!@sideprojects-xmkod.mongodb.net/test?retryWrites=true', {
			useNewUrlParser: true
		});
	return client.db('ToDoAppDB').collection('Users');
}

module.exports = {
    router: router, 
    connectMongoDB: connectMongoDB
};