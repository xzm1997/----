const read_line = require('readline-sync');
let num = parseInt(read_line.question(""));

let steady = [];
let [stoneNum, ...arr] = read_line.question("").split(' ').map(item => parseInt(item));

for (let i = 1; i < num; ++i) {
  [stoneNum, ...arr] = read_line.question("").split(' ').map(item => parseInt(item));
}
