const read_line = require('readline-sync');

let arrayNum = parseInt(read_line.question(""));
let arr = read_line.question("").split(' ').map(item => parseInt(item))
let pointNum = parseInt(read_line.question(""));
let points = read_line.question("").split(' ').map(item => parseInt(item))

let res = [[]];
for (let i = 0; i < arrayNum; ++i) {
  for (let j = 0; j < pointNum; ++j) {
    res[j].push(pointNum[j])
  }
}

console.log(res);
