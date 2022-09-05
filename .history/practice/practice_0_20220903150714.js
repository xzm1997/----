//line=readline()
//print(line)
function solveProblem(map) {
  let foot = [...Array(map.length)].map(item => Array(map[0].length).fill(false));
  let res = [];
  for (let i = 0; i < map.length; ++i) {
      for (let j = 0; j < map[0].length; ++j) {
          let temp = dfs(i,j);
          res.push(temp);
      }
  }
  function dfs(m,n) {
      if (m < 0 || m >= map.length || n < 0 || n >= map[0].length || foot[m][n]===false) {
          return 0;
      }
      
      foot[m][n] = true;
      let dir = [0,1,0,-1,0], ans = 1;
      for (let i = 0; i < 4; ++i) {
          ans += dfs(m+dir[i],n+dir[i+1]);
          console.log(ans)
      }
      return ans;
  }
  return res
}

let map = [[0,1,0,0], [0,1,0,0], [1,1,0,0], [0,0,1,0], [0,0,0,1]];
console.log(solveProblem(map));
