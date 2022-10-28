// 相当于数组打乱顺序


function solveProblem(arr, numPeople) {
  for (let i = 0; i < arr.length; ++i) {
    let index = Math.random()*arr.length;
    [arr[i], arr[index]] = [arr[index], arr[i]];
  }
  let res = new Array(numPeople).map(item => new Array()), point = 0;
  for (let i = 0; i < numPeople; ++i) {
    res[point].push(arr[i]);
    if (point === numPeople-1) point = 0
  }
  return res;
}


console.log(solveProblem([0,1,2,3,4,5], 3))
