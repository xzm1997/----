const read_line = require('readline-sync');

let num = parseInt(read_line.question(''));
let arr = read_line.question('').split(' ').map(item => parseInt(item));

for (let i = 0; i < arr.length-2; ++i) {
  console.log(arr[i], arr[i+1], arr[i+2]);
}


let res = arr.reduce((a,b) => a+b);
console.log(res);
