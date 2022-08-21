const read_line = require('readline-sync')
let gameNum = read_line.question("")

let tomMark = read_line.question("").split(' ').map(item => parseInt(item));
let jerryMark = read_line.question("").split(' ').map(item => parseInt(item));

gameNum = parseInt(gameNum);
let res = 0;
for (let i = 0; i < gameNum-1; ++i) {
  let temp = jerryMark[i+1] - jerryMark[i];
  if (tomMark[i+1] - tomMark[i] != temp) {
    tomMark[i+1] = tomMark[i] + temp;
    ++res;
  }
}

console.log(res);
