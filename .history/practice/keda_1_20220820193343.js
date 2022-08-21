function seqSum( n ) {
  // write code here
  let dir = [[1,2]], res = 0.5;
  for (let i = 1; i < n; ++i) {
    let a = dir[i-1][1];
    let b = dir[i-1][0] + dir[i-1][1]
    let temp = [a, b];
    res += temp[0]/temp[1];
  }
  return res.toFixed(2);
}

console.log(seqSum(5))
