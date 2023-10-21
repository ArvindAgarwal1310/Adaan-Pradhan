const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://<username>:<password>@cluster0.mwifk43.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

 
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://<username>:<password>@cluster0.mwifk43.mongodb.net/?retryWrites=true&w=majority";
const client1 = new MongoClient(url, { useNewUrlParser: true });
client.connect(err => {
  const collection = client1.db("test").collection("devices");
  collection.find({}).toArray(function(err, data) {
    console.log(data);
    client1.close();
  });
});