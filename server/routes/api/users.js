const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.post('/register', async (req, res) => {
    const users = await connectMongoDB();

    const result = await users.find({"username": req.body.username}).toArray();
    
    if (result.length == 0){
        await users.insertOne({"username": req.body.username, "password": req.body.password});
        res.status(201).send();
    } else {
        res.status(418).send();
    }
});

router.post('/login', async (req, res) => {
    const users = await connectMongoDB();

    const result = await users.find({"username": req.body.username, "password": req.body.password}).toArray();

    if (result.length == 1) {
        res.status(201).send();
    } else {
        res.status(418).send();
    }
});

async function connectMongoDB(){
	const client = await mongodb.MongoClient.connect(
		'mongodb+srv://hiidamian1:Cymadeagle1!@sideprojects-xmkod.mongodb.net/test?retryWrites=true', {
			useNewUrlParser: true
		});
	return client.db('ToDoAppDB').collection('Users');
}

module.exports = router;