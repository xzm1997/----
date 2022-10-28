// 相当于数组打乱顺序


function solveProblem(arr, numPeople) {
  // 遍历两次
  for (let i = 0; i < arr.length; ++i) {
    let index = Math.random()*arr.length;
    [arr[i], arr[index]] = [arr[index], arr[i]];
  }
  console.log(arr)
  let res = new Array(numPeople).fill(0).map(item => []), point = 0;
  for (let i = 0; i < arr.length; ++i) {
    res[point].push(arr[i]);
    ++point;
    if (point === numPeople-1) point = 0
  }
  return res;
}


console.log(solveProblem([0,1,2,3,4,5], 3))
