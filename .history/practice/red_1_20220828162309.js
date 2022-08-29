const read_line = require('readline-sync')

let n, m, id, dir = [];
[n, m, id] = read_line.question("").split(' ').map(item => parseInt(item));
for (let i = 0; i < n; ++i) {
  let temp = read_line.question("").split(' ').map(item => parseInt(item));
  dir[i] = temp;
}


