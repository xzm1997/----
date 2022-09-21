const read_line = require('readline-sync');
let num = parseInt(read_line.question(""));

let steady, res;
let [stoneNum, ...arr] = read_line.question("").split(' ').map(item => parseInt(item));
res = stoneNum;
steady = [...arr];

for (let i = 1; i < num; ++i) {
  [stoneNum, ...arr] = read_line.question("").split(' ').map(item => parseInt(item));
  let temp = [];
  arr.forEach(item => {
    
  })
}

function testSteady() {
  
}

console.log(res);
