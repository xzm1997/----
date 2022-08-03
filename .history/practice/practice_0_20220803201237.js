const read_line = require('readline-sync')
let inputArr = read_line.question("").split(' ').map(item => parseInt(item));

let sum = inputArr.reduce((a, b) => a + b);
let totalMark = 0;
for (let i = 1; i <= 5; ++i) {
  totalMark += i * inputArr[i-1];
}
let res = totalMark / sum;
let outputArr = res.toString().split('.');
let output = parseInt(outputArr[0] + '.' + outputArr[1].slice(0, 1));
console.log(output)
