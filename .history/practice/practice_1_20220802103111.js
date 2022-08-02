function quickSort(l, r) {
  if (l >= r) return;
  let i, j;
  [i, j] = [l, r];
  while (i < j) {
    while (i < j && arr[j] >= arr[l]) --j;
    while (i < j && arr[i] <= arr[l]) ++i;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  [arr[l], arr[i]] = [arr[i], arr[l]];
  quickSort(l, i-1);
  quickSort(i+1, r);
}

let arr = [1,5,4,2,6,4,5,3,2,4,5,2];
quickSort(0, arr.length-1);
console.log(arr);
