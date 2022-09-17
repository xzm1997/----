function solveProblem(arr, target) {
  let min = arr.length, sum = 0, front = 0;
  for (let back = 0; i < arr.length; ++i) {
    sum += arr[back];
    if (sum < target) continue;
    if (sum === target) {
      if (back - front < min) {
        
      }
    }
  }
}



let input = '2 3 1 2 4 3 7';
let arr = input.split(' ').map(item => parseInt(item))
let target = arr.pop();
