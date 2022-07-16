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
    [arr[l], arr[i]] = [arr[i], arr[l]];
    quickSort(l, i-1);
    quickSort(i+1, r);
  }
  step(0, arr.length-1);
  return arr;
}

let arr = [1,4,3,6,5,4,7,3,2,3,5,1];
let res = quickSort(arr);
console.log(res);
