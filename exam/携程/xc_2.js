const read_line = require('readline-sync');

let q = parseInt(read_line.question(""));

for (let i = 0; i < q; ++i) {
  let arr = read_line.question("").split(' ').map(item => parseInt(item));
  let youNum = Math.min(...arr);
  console.log(arr[1] + youNum - (arr[1] === youNum ? 0 : 1));
}
