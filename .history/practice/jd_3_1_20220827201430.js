const read_line = require('readline-sync')

let num = parseInt(read_line.question(""));
let arr = read_line.question("").split(' ').map(item => parseInt(item))

const countTime = function(arr) {
  let oddList = [], evenList = [];
  arr.forEach(function(item, index) {
    if (index%2 === 1) {
      oddList.push(item)
    } else {
      evenList.push(item)
    }
  })
  let maxOdd = Math.max(...oddList);
  let minOdd = Math.min(...oddList);
  let maxEven = Math.max(...evenList);
  let minEven = Math.min(...evenList);

  let upEven = 0, downEven = 0;

  let ans = upEven > downEven ? downEven : upEven;
  return ans;
}

let res;
if (num === 1) res = 0;
else res = countTime(arr)
console.log(res)
