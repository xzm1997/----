const read_line = require('readline-sync');
let [n, k] = read_line.question("").split(' ').map(item => parseInt(item));
let height = read_line.question("").split(' ').map(item => parseInt(item));

let res = [0];
for (let i = 1; i < n; ++i) {
  for (let j = Math.max(0, i-k); j < i; ++j) {
    
  }
}

