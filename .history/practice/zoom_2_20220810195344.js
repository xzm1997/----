const read_line = require('readline-sync')
let stuNum = read_line.question("")

let stuLike = read_line.question("").split(' ');
let relationShip = [];
for (let i = 0; i < stuLike.length-1; ++i) {
  relationShip.push(read_line.question("").split(' '));
}

let stuLeader = '1';

console.log(stuLike, relationShip)
