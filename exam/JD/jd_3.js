const read_line = require('readline-sync')

let num = parseInt(read_line.question(""));
let arr = read_line.question("").split(' ').map(item => parseInt(item))

function count(num) {
  let n = num.length;
  let maxOdd = 0, maxEven = 0;

  for (let i = 0; i < n; ++i) {
    if (i%2===1 && maxOdd<num[i]) {
      maxOdd = num[i]
    }
    if (i%2===0 && maxEven<num[i]) {
      maxEven = num[i]
    }
  }
  let sum = 0;
  for (let i = 0; i < n; ++i) {
    if (i%2===0) {
      sum += maxEven-num[i];
    } else {
      sum += maxOdd-num[i]
    }
  }
  if (maxEven !== maxOdd) {
    return sum;
  } else {
    return sum+n/2
  }
}

let res = count(arr)
console.log(res)
