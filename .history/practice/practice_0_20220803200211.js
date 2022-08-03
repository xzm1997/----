const read_line = require('readline-sync')
let inputArr = read_line.question("").split(' ').map(item => parseInt(item));

let sum = inputArr.reduce((a, b) => a + b);
console.log(inputArr)
