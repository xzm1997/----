const read_line = require('readline-sync')

let n, K;
[n, K] = read_line.question("").split(' ').map(item => parseInt(item));
let dir = read_line.question("").split(' ').map(item => parseInt(item));
let ans = 0

for (let i = 0; i < n; ++i) {
  for (let j = 0; j < n; ++j) {
    if (i !== j && dir[i] * dir[j] >= K) ans += 1;
  }
}


console.log(ans);
