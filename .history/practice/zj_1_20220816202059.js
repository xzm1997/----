const read_line = require('readline-sync')
let input = read_line.question("")

let x, m, res = 0;
[x, m] = input.split(' ').map(item => parseInt(item));
let xList = x.toString().split('').map(item => parseInt(item));

for (let i = 0; i < m; ++i) {
  ++xList[xList.length-1];
  if (xList[xList.length-1] >= 10) {
    xList[xList.length-1] -= 10;
    for (let j = xList.length-2; j >= 0; --j) {
      ++res;
      if (xList[j] !== 9) {
        xList[j]++;
        break;
      } else {
        xList[j] = 0
        if (j === 0) {
          xList.unshift(1);
          ++res;
        }
      }
    }
  }
}



console.log(res);
