const express = require('express');
const couchbase = require('couchbase');
const uuidv4 = require('uuid/v4');

const router = express.Router();

// Get todos
router.get('/', (req, res) => {
	const bucket = connectCB();
	console.log("bucket connected");
	//res.send('Hello');

	const N1qlQuery = couchbase.N1qlQuery;
	const query = N1qlQuery.fromString("select * from ToDoAppBucket");

	bucket.query(query, (err, rows) => {
		if (err) {
			res.status(404).json({"error": err});
		} else if (rows.length == 0){
			res.status(200).json({"status": "no todos present"});
		} else {
			console.log("Success!");
			res.json(rows);
		}
	});

	//bucket.disconnect();

});

// Add todos
router.post('/add', (req, res) => {
	const bucket = connectCB();
	console.log("bucket connected");

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
	//res.send('Hello');
	//bucket.disconnect();

});

//Delete todo
router.delete('/delete/:id', (req, res) => {
	const bucket = connectCB();
	console.log("bucket connected delete");

	const id = req.params.id;
	console.log(typeof(id));

	bucket.remove(id, (err, rows) => {
		if (err) {
			res.json(err);
		} else {
			res.json(rows);
		}
	})

	//bucket.disconnect();

});

function connectCB() {
	const cluster = new couchbase.Cluster('127.0.0.1:8091');

	const bucket = cluster.openBucket('ToDoAppBucket', 'Cymadeagle1!', err => {
		if (err){
			throw err;
		} else {
			console.log('Success!');
		}
	})

	return bucket;
}

module.exports = router;