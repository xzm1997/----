let input = ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]

let str = input.join('');
let dir = str.split(' '), res = [];
dir = dir.reverse();
console.log(dir);
for (let item of dir) {
  dir = dir.concat(item, ' ');
}
