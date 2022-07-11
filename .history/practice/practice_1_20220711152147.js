const game = function(num, interval) {
  // 边界条件
  if (num < 1) return null;
  if (num === 1) return 1;
  // 数组建立
  let arr = [1];
  for (let i = 2; i <= num; ++i) {
    arr.push(i);
  }
  // 外循环迭代
  while(arr.length > interval) {
    // 切割与拼接
    let newArr = [], index = 1;
    for (let item of arr) {

    }
  }
  // 内循环迭代
  // 返回结果
  return null;
}

console.log(game(30,3));
