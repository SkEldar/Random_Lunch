var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

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
app.post("/api/sign_in", function(req, res) {
  var frontPassword = req.body.password;
  var frontLogin = req.body.login;
  var backPassword = info.password;
  var backLogin = info.login;
  console.log(req.body);
  if (frontPassword == backPassword && frontLogin == backLogin) {
    res.json({
      text: "successful"
    });
  } else {
    res.json({
      text: "login / password incorrect"
    });
  }
});

app.listen(3012, function() {
  console.log("Server Started");
});
