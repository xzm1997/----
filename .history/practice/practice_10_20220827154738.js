const read_line = require('readline-sync');

let arrayNum = parseInt(read_line.question(""));
let arr = read_line.question("").split(' ').map(item => parseInt(item))
let pointNum = parseInt(read_line.question(""));
let points = read_line.question("").split(' ').map(item => parseInt(item))

let res = [[]];
for (let i = 0; i < pointNum; ++i) {
  res.push([])
}
for (let i = 0; i < arrayNum; ++i) {
  let push = true;
  for (let j = 0; j < pointNum; ++j) {
    if (arr[i] < pointNum[j]) {
      res[j].push(arr[i])
      push = false;
      break;
    }
  }
  if (push) res[pointNum].push(arr[i])
}

console.log(res);
