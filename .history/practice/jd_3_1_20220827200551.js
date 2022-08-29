const read_line = require('readline-sync')

let num = parseInt(read_line.question(""));
let arr = read_line.question("").split(' ').map(item => parseInt(item))

if (num === 1) return 0;


