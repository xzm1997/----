const read_line = require('readline-sync');

let num = parseInt(read_line.question(''));
let arr = read_line.question('').split(' ').map(item => parseInt(item));
let res = 0;
for (let i = 0; i < arr.length-2; ++i) {
  while (arr[i] >= 1 && arr[i+1] >= 2 && arr[i+2] >= 3) {
    res += 5;
    arr[i] -= 1;
    arr[i+1] -= 2;
    arr[i+2] -= 3;
  }
}


res += arr.reduce((a,b) => a+b);
console.log(res);
