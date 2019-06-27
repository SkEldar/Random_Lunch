var names = [
  "Nick",
  "James",
  "Ronald",
  "Ilya",
  "Eldar",
  "Ramazan",
  "Amir",
  "Mirali",
  "Arsen",
  "Harold"
];
var counts = names.length / 2;
for (var i = 0; i < counts; i++) {
  var x = names[Math.floor(Math.random() * names.length)];
  var y = names[Math.floor(Math.random() * names.length)];

  if (x != y) {
    var und = [];
    und.push(x);
    und.push(y);
    console.log(und);
  }
}
