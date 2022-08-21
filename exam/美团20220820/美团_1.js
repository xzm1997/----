const read_line = require('readline-sync')
let num = read_line.question("")

num = parseInt(num)

AList = read_line.question("")
BList = read_line.question("")

let res = [];
for (let i = 0; i < AList.length; ++i) {
  res.push(AList[i]);
  res.push(BList[i]);
}

console.log(res.join(''))
