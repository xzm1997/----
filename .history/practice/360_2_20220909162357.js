const dfs = function(pointN, pointM) {
  if (arr[pointN, pointM] < 0 || pointN < 0 || pointN >= arr.length || pointM < 0 || pointM >= arr[0].length) return 0;

  let dir = [-1, 0, 1, 0, -1], res = arr[pointN][pointM];
  for (let index = 0; index < 4; ++index) {
    res += dfs(pointN+dir[index], pointM+dir[index+1])
  }
  return res;
}
