const read_line = require('readline-sync')
let input = read_line.question("")

let x, m;
[x, m] = input.split(' ').map(item => parseInt(item));


xList = x.toString().split('')

console.log(xList);
