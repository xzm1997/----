const read_line = require('readline-sync')
let num = read_line.question("")
let input = read_line.question("")
let k = read_line.question("")

let positions = input.split(' ').map(item => parseInt(item));
num = parseInt(num);
k = parseInt(k);

const findMin = function(index, right) {
  let res = positions[index + right] > 0 ? positions[index + right] : 0-positions[index + right];
  index += right;
  if (index-k < 0) {
    res += positions[index+k]-0;
  } else if (index+k >= num) {
    res += 0-positions[index-k]
  } else {
    res += positions[index+k]-0 > 0-positions[index-k] ? positions[index+k]-0 : 0-positions[index-k]
  }
  resList.push(res);
}

positions.push(0);
positions.sort((a, b) => a - b);

let index = positions.indexOf(0), resList = [];

findMin(index, 0);
findMin(index, 1);
findMin(index, -1);

resList.sort((a, b) => a-b);
console.log(resList[0]);
