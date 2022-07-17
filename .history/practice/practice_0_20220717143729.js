let input = '1 2 3 4 5 2'

let dir = input.split(' ');
for (let i = 0; i < dir.length; ++i) {
  dir[i] = parseInt(dir[i]);
}
// console.log(dir);

dir.sort((a, b) => a-b);
console.log(dir);
