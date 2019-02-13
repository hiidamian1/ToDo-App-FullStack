const mongodb = require("mongodb");

async function connectMongoDB(collection){
	const client = await mongodb.MongoClient.connect(
		"mongodb+srv://hiidamian1:Cymadeagle1!@sideprojects-xmkod.mongodb.net/test?retryWrites=true", {
			useNewUrlParser: true
		});
	return client.db("ToDoAppDB").collection(collection);
}

module.exports = connectMongoDB;