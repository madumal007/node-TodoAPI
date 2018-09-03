const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      return console.log("Unable to Connect Mongodb Server...");
    }
    db.collection("Todos")
      .find()
      .count()
      .then(
        count => {
          console.log(`Todos Count: ${count}`);
        },
        err => {
          console.log(err);
        }
      );
    db.close();
  }
);
