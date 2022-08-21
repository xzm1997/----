const read_line = require('readline-sync')
let input = read_line.question("")

let numQs, numRev;
[numQs, numRev] = input.split('').map(item => parseInt(item));

let pList = input.split('').map(item => parseInt(item));
let markList = input.split('').map(item => parseInt(item));
