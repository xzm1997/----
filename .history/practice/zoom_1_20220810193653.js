const read_line = require('readline-sync')
let gameNum = read_line.question("")

let tom = read_line.question("").split(' ').map(item => parseInt(item));
let jerry = read_line.question("").split(' ').map(item => parseInt(item));

gameNum = parseInt(gameNum);
let res = 0;
for (let i = 0; i < gameNum-1; ++i) {
  let temp = jerry[i+1] - jerry[i];
  if (tom[i+1] - tom[i] != temp) {
    tom[i+1] = tom[i] + temp;
    ++res;
  }
}

console.log(res);
