function solveSqrt(num, precision) {
  let a, target;
  for (let i = num/2; i > 0; --i) {
    if (i * i < num) {
      a = i;
      target = a
      break;
    }
  }
  while (target.toString().length-1 < precision) {
    target = a + (num - a*a)/(a + target);
  }
  return target;
}
// 根据长度判断精度，是number类型，target就是迭代结果
// 没问题，写吧
// 的确，但这是小问题

console.log(solveSqrt(150, 8))
