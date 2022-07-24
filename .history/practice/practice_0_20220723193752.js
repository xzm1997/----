let num = 32;
let input = '1953 2347 16 -1042 -1546 -933 -1946 -2722 -427 2111 3260 -1265 -8196 -8766 -2922 4135 6564 4644 2726 2789 4939 4451 149 -2320 -1348 2211 3370 900 -886 -1998 -643 172'

let dir = input.split(' ');
for (let i = 0; i < num; ++i) {
  dir[i] = parseInt(dir[i])
}
console.log(dir);

let res = [];
for (let item of dir) {
  let temp = item
}
