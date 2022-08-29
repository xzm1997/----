const read_line = require('readline-sync')

let num = parseInt(read_line.question(""));
let arr = read_line.question("").split(' ').map(item => parseInt(item))

const countTime = function(arr) {

}

let res;
if (num === 1) return res;
res = count(arr)
console.log(res)
