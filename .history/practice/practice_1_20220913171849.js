let n, m, count = 0, arr;
let flag = [];

const main = function(args) {
  [n,m] = read_line().split(' ').map(item => parseInt(item));
  arr = [...Array(n+1)].map(item => new Array(n+1));
  flag = Array(n+1);
  for (let i = 1; i <= m; ++i) {
    let u, v;
    [u, v] = read_line().split(' ').map(item => parseInt(item));
    arr[u][v]=1;
    arr[v][u]=1;
  }
  for (let i = 1; i <= n; ++i) {
    DFS(i,i,1);
    flag = Array(n+1).fill(0);
  }
  console.log(count);
}

const DFS = function(pot, st, bu) {
  if (bu === 4) {
    count++;
  }
  if(bu > 4) {
    return;
  }
  flag[st]=1;
  for(let i=1; i<=n; i++) {
    if(arr[st][i]===1 && flag[i]===0) {
      DFS(pot, i, bu+1);
      flag[i] = 0;
    }
    if(bu==3 && i==n) {//i==n使这个判断条件只会出现一次
      if(arr[st][pot]==1) {
        count++;
      }
    }
  }
  return;
}

main();
