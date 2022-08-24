function mergeSort(arr) {
  const merge = function(left, right) {
    let res = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        res.push(left.shift());
      } else {
        res.push(right.shift());
      }
    }
    if (left.length) {
      res = res.concat(left);
    }
    if (right.length) {
      res = res.concat(right);
    }
    return res;
  }

  if (arr.length < 2) return arr;
  let middle = Math.floor(arr.length / 2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right));
}


let arr = [1,6,5,3,7,4,1,35,42,14,54,23,14,19];
console.log(mergeSort(arr));
