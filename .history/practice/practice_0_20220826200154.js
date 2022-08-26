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
    let hash = read_line.question("").split(' ').map(i => parseInt(i));
    let temp = [];
    hash.forEach(i => {
      if (ans.indexOf(i) !== -1) {
        temp.push(i);
      }
    })
    ans = temp;
  }
  let res = ans.join(' ');
}

