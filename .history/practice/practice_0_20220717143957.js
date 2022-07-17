let input = '1 2 3 4 5'

let dir = input.split(' ');
for (let i = 0; i < dir.length; ++i) {
  dir[i] = parseInt(dir[i]);
}
dir.sort((a, b) => a-b);
// console.log(dir);

let sum1 = 0, sum2 = 0;
for (let item of dir) {
  sum1 > sum2 ? sum2 += item : sum1 += item;
}

return Math.abs(sum1 - sum2);
