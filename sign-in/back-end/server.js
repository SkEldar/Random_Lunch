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

var info = {
  login: "Eldar",
  password: "qwerty1"
};

app.get("/", function(req, res) {
  res.send("START");
});

// app.post("/api/sign_in", function(req, res) {
//   console.log(req.body);
//   res.send("delivired");
// });
app.post("/api/register", function(req, res) {
  var user = {
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
  let frontPass = req.params.frontPass;
  let frontLogin = req.params.frontlogin;
  console.log(frontLogin);
  console.log(frontPass);
  // db.collection("users").findOne(
  //   { login: frontLogin, password: frontPass },
  //   function(err, doc) {}
  // );
});
// var frontPassword = req.params.password;
// var frontLogin = req.params.login;

// console.log(frontPassword);
// console.log(frontLogin);
// if (frontPassword == backPassword && frontLogin == backLogin) {
//   res.json({
//     text: "successful"
//   });
// } else {
//   res.json({
//     text: "login / password incorrect"
//   });
// }

MongoClient.connect("mongodb://localhost:27017/info", function(err, database) {
  if (err) {
    return console.log(err);
  }
  db = database;
  app.listen(3012, function() {
    console.log("Server Started");
  });
});
