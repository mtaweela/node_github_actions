const mongoose = require("mongoose");

const { MONGODB_URI } = process.env;

mongoose.connect("mongodb://localhost:27017/node_github", {
  useCreateIndex: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Data base ... connected");
});
