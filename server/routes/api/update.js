const mongodb = require("mongodb");
const {connectMongoDB, client} = require("./connect");
const collection = "ToDos";

async function updateDB(newValues) {
  const todoCollection = await connectMongoDB(collection);

  const entries = await todoCollection.find({}).toArray();

  for (let i = 0; i < entries.length; i++) {
    if (entries[i].deadline) {
      console.log(`updating ${entries[i]._id}`);
      await todoCollection.updateOne({"_id": new mongodb.ObjectID(entries[i]._id)}, {$set: {
        "deadline": new Date(entries[i].deadline)
      }});
    }
  }
}

module.exports = updateDB;