let input = ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]

let str = input.join('');
let dir = str.split(' '), res = [];
dir = dir.reverse();

for (let item of dir) {
  res = res.concat(item.split(''), ' ');
}
console.log(dir);
