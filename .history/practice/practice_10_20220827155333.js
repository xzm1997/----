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
    if (arr[i] === points[j]) {
      continue;
    }
    if (arr[i] < points[j]) {
      if (points.indexOf(arr[i]) !== -1) {
        continue;
      }
      res[j].push(arr[i])
      push = false;
      break;
    }
  }
  if (push && points.indexOf(arr[i]) === -1) res[pointNum].push(arr[i])
}

let ans = res[0];
for (let i = 0; i < pointNum; ++i) {
  
}
