const read_line = require('readline-sync')
let num = read_line.question("")
let input = read_line.question("")
let k = read_line.question("")

let positions = input.split(' ').map(item => parseInt(item));
num = parseInt(num);
k = parseInt(k);

positions.push(0);
positions.sort((a, b) => a - b);

let index = positions.indexOf(0);

if (index-k < 0) {

} else if (index+k > num) {

} else {
  
}


console.log(positions);
