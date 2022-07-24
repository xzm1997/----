let num = 32;
let input = '1953 2347 16 -1042 -1546 -933 -1946 -2722 -427 2111 3260 -1265 -8196 -8766 -2922 4135 6564 4644 2726 2789 4939 4451 149 -2320 -1348 2211 3370 900 -886 -1998 -643 172'

let dir = input.split(' '), res = [];
for (let i = 0; i < num; ++i) {
  item = parseInt(dir[i])
  let hanWin = 0.5 * (1 - Math.cos(2 * 3.1415927 * i / num));
  let temp = item * hanWin
  res.push(Math.round(temp));
}
// console.log(dir);
console.log(res);
