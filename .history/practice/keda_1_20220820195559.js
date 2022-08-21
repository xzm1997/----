function seqSum( n ) {
  // write code here
  let dir = [[1,2]], res = 0.5;
  for (let i = 1; i < n; ++i) {
    let temp = [dir[i-1][1], dir[i-1][0] + dir[i-1][1]];
    res += temp[0]/temp[1];
    dir.push(temp);
  }
  return res.toFixed(2);
}

console.log(seqSum(5))
