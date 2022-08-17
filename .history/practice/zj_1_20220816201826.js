const read_line = require('readline-sync')
let input = read_line.question("")

let x, m, res = 0;
[x, m] = input.split(' ').map(item => parseInt(item));
xList = x.toString().split('').map(item => parseInt(item));

for (let i = 0; i < m; ++i) {
  ++xList[xList.length-1];
}



console.log(res);
