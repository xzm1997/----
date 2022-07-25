let input = '["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]'
input = JSON.parse(input);
// console.log(Array.isArray(input));

let str = input.join('');
let dir = str.split(' '), res = [];
dir = dir.reverse();

for (let item of dir) {
  res = res.concat(item.split(''), ' ');
}
res.pop();

let output = res.join('\",\"')

console.log(output);
