function solveSqrt(num, precision) {
  let a;
  for (let i = Math.floor(num/2); i > 0; --i) {
    if (i * i < num) {
      a = i;
    }
  }
  
}
