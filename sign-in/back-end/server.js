var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var MongoClient = require("mongodb").MongoClient;
var ObjectID = require("mongodb").ObjectID;
var db;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", function(req, res) {
  res.send("START");
});

app.post("/api/register", function(req, res) {
  let user = {
    frontNickname: req.body.Nickname,
    frontEmail: req.body.Email,
    frontPass: req.body.password
  };
  db.collection("users").insert(user, function(err, result) {
    if (err) {
      return console.log(err);
      res.sendStatus(500);
    }
    console.log(user);
  });
});
app.post("/api/sign_in", function(req, res) {
  let frontPassword = req.body.password;
  let frontLogin = req.body.login;

  console.log(frontLogin);
  console.log(frontPassword);

  db.collection("users").findOne(
    { frontNickname: frontLogin, frontPass: frontPassword },
    function(err, doc) {
      if (err) {
        return res.sendStatus(500);
      }
      if (frontPass == frontPassword && frontNickname == frontLogin) {
        res.json({
          text: "vse zaebymba"
        });
      } else {
        res.json({
          text: "ne zaebymba"
        });
      }
    }
  );
});

MongoClient.connect("mongodb://localhost:27017/info", function(err, database) {
  if (err) {
    return console.log(err);
  }
  db = database;
  app.listen(3012, function() {
    console.log("Server Started");
  });
});
