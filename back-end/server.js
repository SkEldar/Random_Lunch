var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", function(req, res) {
  res.send("START");
});
app.get("/api/sign_in", function(req, res) {
  console.log(1);
});
app.post("/api/sign_in", function(req, res) {
  console.log(req.body);
  res.send("delivired");
});

app.listen(3012, function() {
  console.log("Server Started");
});
