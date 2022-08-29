const read_line = require('readline-sync')

let n, K;
[n, K] = read_line.question("").split(' ').map(item => parseInt(item));
let dir = read_line.question("").split(' ').map(item => parseInt(item));
let ans = []

const solveProblem = function(index, res, k) {
  // console.log(index, res, k)
  if (k === 1) {
    console.log(res)
    for (let i = 0; i < n; ++i) {
      if (index.indexOf(i) === -1 &&) {
        let result = res.concat(dir[i]);
        if (result[0] * result[1] >= k) ans += 1;
      }
    }
  } else {
    for (let i = 0; i < n; ++i) {
      // console.log(index.indexOf(i))
      if (index.indexOf(i) === -1) {
        solveProblem(index.concat(i), res.concat(dir[i]), k-1);
      }
    }
  }
}

solveProblem([], [], 2);
console.log(ans);
