const express = require("express");

// const couchbase = require("couchbase");
const mongodb = require("mongodb");

const router = express.Router();

//const updateDB = require("./update");
//updateDB({});

// MongoDB implementation
// Get todos
router.get("/", async (req, res) => {
	const todoCollection = req.app.locals.todoCollection;

	let filters = {"username": req.user.username}
	const listParams = req.query;

	if ("hideCompleted" in listParams && listParams.hideCompleted){
		filters.completed = false;
	}

	if ("deadline" in listParams){
		if (listParams.deadline.length == 1) {
			startDate = new Date(listParams.deadline[0]);

			endDate = new Date();
			endDate.setTime(startDate.getTime() + 24 * 3600000);

			const query = {
				"$gte": startDate, 
				"$lt": endDate
			};

			filters.deadline = query;
		} else {
			const query = {};

			if (listParams.deadline[0]) {
				startDate = new Date(listParams.deadline[0]);

				query.$gte = startDate;
			}
			
			if (listParams.deadline[1]) {
				endDate = new Date(listParams.deadline[1]);

				query.$lte = endDate;
			}

			filters.deadline = query;
    }
  }
	
	const todos = await todoCollection.find(filters).toArray();
	/*todos.sort((todo1, todo2) => {
		return todo1.deadline - todo2.deadline;
	});*/

	res.send(todos);
});

// Add todo
router.post("/", async (req, res) => {
	const todoCollection = req.app.locals.todoCollection;
	
	const data = {
		"username": req.user.username,
		"title": req.body.text,
		"completed": false,
		"deadline": new Date(req.body.deadline)
	}

	const response = await todoCollection.insertOne(data);
	//console.log(response.ops);
	res.status(201).send(response.ops[0]);

});

// delete todo
router.delete("/:id", async (req, res) => {
	const todoCollection = req.app.locals.todoCollection;

	await todoCollection.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
	res.status(200).send();
});

// update todo
router.put("/", async (req, res) => {
	const todoCollection = req.app.locals.todoCollection;

	await todoCollection.updateOne({_id: new mongodb.ObjectID(req.body.id)}, {
		$set: {
			"completed": req.body.completed,
			"deadline": new Date(req.body.deadline)
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