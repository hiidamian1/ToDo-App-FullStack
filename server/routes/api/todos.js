const express = require("express");

// const couchbase = require("couchbase");
const mongodb = require("mongodb");

const router = express.Router();
const connectMongoDB = require("./connect");
const collection = "ToDos";

// MongoDB implementation
// Get todos
router.get("/", async (req, res) => {
	const todoCollection = await connectMongoDB(collection);

	let filters = {"username": req.user.username}
	const listParams = req.query;

	if ("hideCompleted" in listParams && listParams.hideCompleted){
		filters.completed = false;
	}

	if ("deadline" in listParams){
		filters.deadline = listParams.deadline.toDateString();
	}
	
	res.send(await todoCollection.find(filters).toArray());
});

// Add todo
router.post("/", async (req, res) => {
	const todoCollection = await connectMongoDB(collection);

	const data = {
		"username": req.user.username,
		"title": req.body.text,
		"completed": false,
		"deadline": (new Date()).toDateString()
	}

	await todoCollection.insertOne(data);

	res.status(201).send();

});

// delete todo
router.delete("/:id", async (req, res) => {
	const todoCollection = await connectMongoDB(collection);

	await todoCollection.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
	res.status(200).send();
});

// update todo
router.put("/", async (req, res) => {
	const todoCollection = await connectMongoDB(collection);
	console.log(`update ${(new Date(req.body.deadline)).toDateString()}`);
	await todoCollection.updateOne({_id: new mongodb.ObjectID(req.body.id)}, {
		$set: {
			"completed": req.body.completed,
			"deadline": (new Date(req.body.deadline)).toDateString()
		}
	});

	res.status(200).send();
});

/*async function connectMongoDB(collection){
	const client = await mongodb.MongoClient.connect(
		"mongodb+srv://hiidamian1:Cymadeagle1!@sideprojects-xmkod.mongodb.net/test?retryWrites=true", {
			useNewUrlParser: true
		});
	return client.db("ToDoAppDB").collection(collection);
}

Couchbase implementation
// Get todos
router.get("/", (req, res) => {
	const bucket = connectCB();

	const N1qlQuery = couchbase.N1qlQuery;
	const query = N1qlQuery.fromString("select meta().id as id, * from ToDoAppBucket");

	bucket.query(query, (err, rows) => {
		if (err) {
			res.status(404).json({"error": err});
		} else if (rows.length == 0){
			res.status(200).json({"status": "no todos present"});
		} else {
			res.json(rows);
		}
	});

});

// Add todos
router.post("/", (req, res) => {
	const bucket = connectCB();

	const data = {
		"title": req.body.text,
		"completed": false
	}

	bucket.insert(uuidv4(), data, (err, rows) => {
		if (err) {
			res.json(err);
		} else {
			res.json(rows);
		}
	})

});

//Delete todo
router.delete("/:id", (req, res) => {
	const bucket = connectCB();

	const id = req.params.id;

	bucket.remove(id, (err, rows) => {
		if (err) {
			res.json(err);
		} else {
			res.json(rows);
		}
	})

});

function connectCB() {
	const cluster = new couchbase.Cluster("127.0.0.1:8091");

	const bucket = cluster.openBucket("ToDoAppBucket", "Cymadeagle1!", err => {
		if (err){
			throw err;
		} else {
			console.log("Success!");
		}
	})

	return bucket;
}*/

module.exports = router;