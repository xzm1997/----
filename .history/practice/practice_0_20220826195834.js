const read_line = require('readline-sync')
let n = parseInt(read_line.question(""));

for (let i = 0; i < n; ++i) {
  let m = parseInt(read_line.question(""));
  if (m < 1) {
    console.log('');
    continue;
  }
  let ans = read_line.question("").split(' ').map(i => parseInt(i));
  for (let j = 1; j < m; ++j) {
    let temp = read_line.question("").split(' ').map(i => parseInt(i));
  }
}

