function seqSum( n ) {
  // write code here
  let dir = [[1,2]];
  for (let i = 1; i < n; ++i) {
    let temp = [dir[i-1][1], dir[i-1][0] + dir[i-1][1]];
  }
}

console.log(seqSum(5))
