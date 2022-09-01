const read_line = require('readline-sync');

const dfs = function (n, m, x, point1, point2, sum) {
  if (point1 >= n || point2 >= m) return false;
  sum += map[point1][point2];
  if (point1 === n-1 && point2 === m-1 && sum === x) {
    return true;
  }
  return dfs(point1+1, point2, sum) || dfs(point1, point2+1, sum);
}

let num = parseInt(read_line.question(""));
for (let i = 0; i < num; ++i) {
  let n, m, k, x;
  [n,m,k,x] = read_line.question("").split(' ').map(item => parseInt(item));
  let map = [];
  for (let j = 0; j < n; ++j) {
    map.push(read_line.question("").split(' ').map(item => parseInt(item)));
  }
  console.log(dfs(0,0,0));
}
