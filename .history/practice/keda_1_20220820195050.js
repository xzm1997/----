function seqSum( n ) {
  // write code here
  let dir = [[1,2]], res = 0.5;
  for (let i = 1; i < n; ++i) {
    let temp = [dir[i-1][1], dir[i-1][0] + dir[i-1][1]];
    res += temp[0]/temp[1];
    dir.push(temp);
  }
  let front = res.toString().split('.')[0]
  let back = res.toString().split('.')[1].substring(0,2);
}

console.log(seqSum(3))
