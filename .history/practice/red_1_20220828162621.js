const read_line = require('readline-sync')

let n, m, id, dir = [];
[n, m, id] = read_line.question("").split(' ').map(item => parseInt(item));
for (let i = 0; i < n; ++i) {
  let temp = read_line.question("").split(' ').map(item => parseInt(item));
  let sum = temp.reduce((a, b) => a+b);
  dir[i] = [sum, i];
}

dir.sort((a, b) => b[0] - a[0]);
console.log(dir);
