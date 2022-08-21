const read_line = require('readline-sync')
let num = read_line.question("")

num = parseInt(num)

AList = read_line.question("").split('').map(item => parseInt(item));
BList = read_line.question("").split('').map(item => parseInt(item));
