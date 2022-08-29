const read_line = require('readline-sync');

let arrayNum = parseInt(read_line.question(""));
let arr = read_line.question("").split(' ').map(item => parseInt(item))
