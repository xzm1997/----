const read_line = require('readline-sync')
let input = read_line.question("")

let numQs, numRev, mark = '0', upList = [];
[numQs, numRev] = input.split(' ')
numQs = parseInt(numQs);
numRev = parseInt(numRev)

let addByString = (a, b) => {
  if (a.length < b.length) {
    [a, b] = [b, a];
  }
  b = '0'.repeat(a.length - b.length) + b;
  let res = [];
  let push = 0;
  for (let i = a.length-1; i >= 0; --i) {
    let ans = parseInt(a[i]) + parseInt(b[i]) + push;
    if (ans > 9) {
      push = 1;
      ans %= 10;
    } else {
      push = 0
    }
    res.unshift(ans);
  }
  return res.join('');
}

let pList = read_line.question("").split(' ').map(item => parseInt(item));
let markList = read_line.question("").split(' ').map(item => parseInt(item));

for (let i = 0; i < numQs; ++i) {
  // mark += (pList[i] * markList[i]);
  mark = addByString(mark, (pList[i] * markList[i]).toString())
}

for (let i = 0; i < numQs; ++i) {
  let temp = (100 - pList[i]) * markList[i];
  upList.push(temp);
}

upList.sort((a, b) => b - a);
for (let i = 0; i < numRev; ++i) {
  mark = addByString(mark, upList[i].toString())
}

let res = mark
let start = res.substring(0, res.length-2)
let end = res.substring(res.length-2)

console.log(start+'.'+end)

