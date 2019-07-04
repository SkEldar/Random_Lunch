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
// let counts = names.length / 2;
// for (var i = 0; i < counts; i++) {
//   var x = names[Math.floor(Math.random() * names.length)];
//   var y = names[Math.floor(Math.random() * names.length)];
//   let und = [];
//   let h = und.includes(x);
//   let n = und.includes(y);

//   if (x !== y && n === false && h === false) {
//     und.push(x);
//     und.push(y);
//     console.log(und);
//   }
// }
let b = [];
while (b.length < 10) {
  let l = names[Math.floor(Math.random() * names.length)];
  let d = b.includes(l);
  if (d === false) {
    b.push(l);
  }
}
// console.log(b);
let c = 0;
for (let i = 0; i < b.length; i++) {
  let q = [];
  c++;
  q.push(b[i] + " " + b[c]);
  console.log(q);
}
