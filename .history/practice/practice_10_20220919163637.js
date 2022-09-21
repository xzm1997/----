const read_line = require('readline-sync');
let [n, k] = read_line.question("").split(' ').map(item => parseInt(item));
let height = read_line.question("").split(' ').map(item => parseInt(item));

let res = [0];
for (let i = 1; i < n; ++i) {
  let tempCost = Infinity;
  for (let j = Math.max(0, i-k); j < i; ++j) {
    let jump = height[i] - height[j] > 0 ? height[i] - height[j] : 0
    tempCost = Math.min(tempCost, jump)
  }
  res.push(tempCost)
}

console.log(res)
