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

function testSteady(box) {
  for (let i = 0; i < steady.length; ++i) {
    if (Math.abs(box - steady[i]) < 50) return true;
    try {
      
    } catch (e) {
      
    }
  }
}

console.log(res);
