const read_line = require('readline-sync');
let t = parseInt(read_line());

for (let i = 0; i < t; ++i) {
  let n, m, arr = [];
  const dfs = function(pointN, pointM) {
  if (arr[pointN][pointM] < 0 || pointN < 0 || pointN >= arr.length || pointM < 0 || pointM >= arr[0].length) return 0;

  let dir = [-1, 0, 1, 0, -1], res = arr[pointN][pointM];
  for (let index = 0; index < 4; ++index) {
    res += dfs(pointN+dir[index], pointM+dir[index+1])
  }
  return res;
}
  [n,m] = read_line().split(' ').map (item => parseInt(item));
  for (let j = 0; j < n; ++j) {
    arr.push(read_line().split(' ').map (item => parseInt(item)))
  }
  let max = 0;
  console.log(arr)
  for (let p = 0; p < n; ++p) {
    for (let q = 0; q < m; ++q) {
      let temp = dfs(p,q);
      console.log(temp);
      max = max > temp ? max : temp;
    }
  }
  console.log(max);
}
