let names = [
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

let b = [];
let result = [];
while (b.length < 10) {
  let l = names[Math.floor(Math.random() * names.length)];
  let d = b.includes(l);
  if (d === false) {
    b.push(l);
  }
}
for (let i = 0; i < 5; i++) {
  let pair = [];

  for (let k = 0; k < 2; k++) {
    pair.push(b[i * 2 + k]);
  }
  result.push(pair);
}
console.log(result);
