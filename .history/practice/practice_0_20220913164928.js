const read_line = require('readline-sync');

let num = parseInt(read_line.question(""));
let arr = read_line.question("").split(' ').map(item => parseInt(item));

let index = 0;
while (index < num) {
  index += arr[index];
}

console.log(index);

if (index === num - 1) {
  console.log(true);
} else {
  console.log(false);
}
