function mergeSort(arr) {
  const merge = function(left, right) {
    
  }

  if (arr.length < 2) return arr;
  let middle = Math.floor(len / 2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right));
}


let arr = [1,6,5,3,7,4,1,35,42,14,54,23,14,19];
