const read_line = require('readline-sync')

let n, K;
[n, K] = read_line.question("").split(' ').map(item => parseInt(item));
let dir = read_line.question("").split(' ').map(item => parseInt(item));
let ans = []

function solveProblem(index, res, k) {
  if (k === 1) {
    for (let i = 0; i < dir.length; ++i) {
      ans.push(res.concat(dir[i]));
    }
    return;
  } else {

  }
}
