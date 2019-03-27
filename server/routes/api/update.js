const mongodb = require("mongodb");
const connectMongoDB = require("./connect");
const collection = "ToDos";

async function updateDB(newValues) {
  const {collection: todoCollection, client} = await connectMongoDB(collection);

  const entries = await todoCollection.find({}).toArray();

  for (let i = 0; i < entries.length; i++) {
    if (entries[i].deadline && entries[i].username == "damianhii") {
      console.log(`updating ${entries[i]._id}`);
      const newUTCDate = new Date(entries[i].deadline).toUTCString());
      //newUTCDate.setUTCHours(0, 0, 0, 0);

      await todoCollection.updateOne({"_id": new mongodb.ObjectID(entries[i]._id)}, {$set: {
        "deadline": newUTCDate
      }});
    }
  }
}

module.exports = updateDB;