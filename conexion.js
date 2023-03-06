const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://AlanWasaka:alandejesus@clusteralan.rnfab7j.mongodb.net/test";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
