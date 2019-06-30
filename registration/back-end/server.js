var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var MongoClient = require("mongodb").MongoClient;
var app = express();
var db;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.json({
    text: "Work!"
  });
});

// app.post("/api/register", function(req, res) {
//   console.log(req.body);
// });

MongoClient.connect("mongodb://localhost:27017/baseOfUsers", function(
  err,
  database
) {
  if (err) {
    return console.log(err);
  }
  db = database;
  app.listen(3666, function() {
    console.log("Started");
  });
});
