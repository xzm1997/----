function solveProblem(arr, target) {
  let min = arr.length, sum = 0, front = 0, resBack, resFront;
  for (let back = 0; back < arr.length; ++back) {
    sum += arr[back];
    if (sum < target) continue;
    while (sum > target && sum - arr[front] >= target) {
      sum -= arr[front];
      ++front;
    }
    if (back - front < min) {
      min = back - front;
      resFront = front;
      resBack = back;
    }
  }
  let res = '';
  for (let i = resFront; i <= resBack; ++i) {
    res = res + i + ' ';
  }
  return res;
}


let input = '2 3 1 2 4 3 7';
let arr = input.split(' ').map(item => parseInt(item))
let target = arr.pop();
console.log(solveProblem(arr, target))
