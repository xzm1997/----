const read_line = require('readline-sync');

let arrayNum = parseInt(read_line.question(""));
let arr = read_line.question("").split(' ').map(item => parseInt(item))
let pointNum = parseInt(read_line.question(""));
let points = read_line.question("").split(' ').map(item => parseInt(item))

let res = new Array(pointNum).map(item => new Array());
console.log(res)
for (let i = 0; i < pointNum; ++i) {
  
}
