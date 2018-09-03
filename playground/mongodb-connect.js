const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      return console.log("Unable to Connect MongoDB Server...");
    }
    console.log("Connect to MongoDB Server..");
    db.collection("Todos").insertOne(
      {
        text: "Something To do.",
        completed: false
      },
      (err, result) => {
        if (err) {
          return console.log("Unable to Insert Document..".err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
      }
    );
    db.close();
  }
);
