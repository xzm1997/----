const read_line = require('readline-sync')

let input;
while (true) {
  input = read_line.question("");
  if (input) {
    break;
  }
  // Code
  console.log(input)
}
