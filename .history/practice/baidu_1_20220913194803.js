const read_line = require('readline-sync');

const judge = function(str) {
  let set = new Set(str.split(''));
  if (set.size !== 5) return false;

  let setCha = new Set(['a','e','i','o','u']);
  if (!(setCha.has(str[1]) && setCha.has(str[2]) && setCha.has(str[4]))) return false;
  if (setCha.has(str[0]) && setCha.has(str[3])) return false;
  return true;
}

let input = read_line.question(""), res = 0;
if (input.length < 5) console.log(0);
else {
  for (let i = 0; i <= input.length-5; ++i) {
    if (judge(input.slice(i, i + 5))) {
      ++res;
    }
  }
  console.log(res);
}
