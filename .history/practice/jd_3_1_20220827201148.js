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

}

let res;
if (num === 1) return res;
res = countTime(arr)
console.log(res)
