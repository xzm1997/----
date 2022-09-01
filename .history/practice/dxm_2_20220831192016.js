const read_line = require('readline-sync');

let num = parseInt(read_line.question(""));
for (let i = 0; i < num; ++i) {
  let n, m, k, x;
  [n,m,k,x] = read_line.question("").split(' ').map(item => parseInt(item));
  let map = [];
  for (let j = 0; j < n; ++j) {
    map.push(read_line.question("").split(' ').map(item => parseInt(item)));
  }
  
}
