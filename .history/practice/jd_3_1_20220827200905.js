const read_line = require('readline-sync')

let num = parseInt(read_line.question(""));
let arr = read_line.question("").split(' ').map(item => parseInt(item))

const countTime = function(num) {
  let n = num.length;
  let maxOdd = num[1], maxEven = num[0], minOdd = num[1], minEven = num[0];

  for (let i = 0; i < n; ++i) {
    if (i%2===1) {
      if (maxOdd<num[i]) maxOdd = num[i];
      if (minOdd>num[i]) minOdd = num[i];
    }
    if (i%2===0) {
      if (maxEven<num[i]) maxEven = num[i];
      if (minEven>num[i]) minEven = num[i];
    }
  }
}

let res;
if (num === 1) return res;
res = count(arr)
console.log(res)
