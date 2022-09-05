function solveProblem(arr, k) {
  // TODO: 测试通过
  let res = [], temp = [], index = 0;
  while (arr.length) {
    temp.push(arr.shift());
    ++index;
    if (k === index) {
      res.push(Array.from(temp));
      index = 0;
      temp = [];
    }
  }
  return res;
}

console.log(solveProblem([1,2,3,4,5,6], 2))
