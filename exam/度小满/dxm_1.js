const read_line = require('readline-sync');

let n, k;
[n, k] = read_line.question("").split(' ').map(item => parseInt(item));

let arr = read_line.question("").split(' ').map(item => parseInt(item))
let count = 0;
for (let i = 0; i < arr.length; ++i) {
  for (let j = i+1; j <= arr.length; ++j) {
    let temp = arr.slice(i, j)
    // console.log(temp);
    let max = Math.max(...temp);
    let min = Math.min(...temp);
    if (min * k === max) ++count;
  }
}
console.log(count);
