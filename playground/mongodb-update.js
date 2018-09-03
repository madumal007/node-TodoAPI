const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      return console.log("Unable to Connect Mongodb Server...");
    }
    db.collection("Todos")
      .findOneAndUpdate(
        {
          _id: ObjectID("5b8d5f0eb560c41a90be111c")
        },
        {
          $set: {
            completed: true
          }
        },
        {
          returnOriginal: false
        }
      )
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
