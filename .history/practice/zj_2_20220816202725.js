const read_line = require('readline-sync')
let input = read_line.question("")

let positions = input.split(' ').map(item => parseInt(item));



console.log(positions);
