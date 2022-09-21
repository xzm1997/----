function solveSqrt(num, precision) {
  let a, target;
  for (let i = Math.floor(num/2); i > 0; --i) {
    if (i * i < num) {
      a = i;
      target = a
    }
  }
  while (target.toString().length < precision) {
    target = a + (num - a*a)/(a + target);
  }
  return target;
}


console.log(solveSqrt(150, 8))
