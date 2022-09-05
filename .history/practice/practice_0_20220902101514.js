function quickSort(left, right) {
  if (left >= right) return;
  let i, j;
  [i, j] = [left, right];
  while (i < j) {
    while (i < j && arr[j] >= arr[left]) --j;
    while (i < j && arr[i] <= arr[left]) ++i;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  [arr[left], arr[i]] = [arr[i], arr[left]];
  quickSort(left, i-1);
  quickSort(i+1, right);
}

let arr = [1,4,3,7,6,3,8,1,9,0];
quickSort(0, arr.length-1);
console.log(arr);
