function solveProblem(arr, k) {
  let res = [], temp = [], index = 0;
  while (index < k) {
    temp.push(arr[index]);
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
