const read_line = require('readline-sync');

const judge = function(str) {
  let set = new Set(str.split(''));
  if (set.length !== 5) return false;
  let setCha = new Set(['a','e','i','o','u']);
  if (!(setCha.has(str[1]) && setCha.has(str[2]) && setCha.has(str[4]))) return false;
  if (setCha.has(str[0]) && setCha.has(str[3])) return false;
  return true;
}

let input = 
