const read_line = require('readline-sync');
let num = parseInt(read_line.question(""));

let steady = [];
for (let i = 0; i < num; ++i) {
  let [stoneNum, ...arr] = read_line.question("").split(' ').map(item => parseInt(item));
  
}
