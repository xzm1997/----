const read_line = require('readline-sync')

let n, k;
[n, k] = read_line.question("").split(' ').map(item => parseInt(item))
let str = read_line.question("");

let up = str.slice(0, k)
