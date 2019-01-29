const express = require('express');

//const couchbase = require('couchbase');

const router = express.Router();

// Get todos
router.get('/', (req, res) => {
	res.send('hello');
})
// Add todos

//Depete todo

module.exports = router;