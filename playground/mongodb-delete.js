const { MongoClient } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      return console.log("Unable to Connect Mongodb Server...");
    }
    db.collection("Todos")
      .findOneAndDelete({ completed: true })
      .then(
        result => {
          console.log(result);
        },
        err => {
          console.log(err);
        }
      );
    db.close();
  }
);
