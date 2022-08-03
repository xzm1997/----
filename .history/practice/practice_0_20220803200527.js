const read_line = require('readline-sync')
let inputArr = read_line.question("").split(' ').map(item => parseInt(item));

let sum = inputArr.reduce((a, b) => a + b);
let totalMark = 0;
for (let i = 1; i <= 5; ++i) {
  totalMark += i * inputArr[i];
}
let res = totalMark/sum
console.log(res)
