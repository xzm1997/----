const quickSort = function (arr) {
  const step = function(l, r) {
    if (l >= r) return;
    let i, j;
    [i, j] = [l, r];
    while (i < j) {
      while (i < j && arr[j] >= arr[l]) --j;
      while (i < j && arr[i] <= arr[l]) ++i;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    [arr[i], arr[l]] = [arr[l], arr[i]];

    step(l, i-1);
    step(i+1, r);
  }
  step(0, arr.length-1);
  return arr;
}

arr = [1,5,4,7,3,43,1,34,56,76,21,12];
let res = quickSort(arr);
