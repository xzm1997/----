const read_line = require('readline-sync')
let stuNum = read_line.question("")

let stuLike = read_line.question("").split('').map(item => parseInt(item));
let relationShip = [];
for (let i = 0; i < stuLike.length-1; ++i) {
  let temp = read_line.question("").split(' ').map(item => parseInt(item))
  relationShip.push(temp);
}

let stuLeader = '1';

