function bubbleSort() {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = i+1; j < arr.length; ++j) {
      if (arr[j] < arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
}

function selectSort() {
  for (let i = 0; i < arr.length; ++i) {
    let min = arr[i], minIndex = i;
    for (let j = i+1; j < arr.length; ++j) {
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
}

function insertSort() {
  let preIndex, current;
  for (let i = 1; i < arr.length; ++i) {
    preIndex = i - 1;
    current = arr[i];
    while (preIndex > 0 && arr[preIndex] >= current) {
      arr[preIndex+1] = arr[preIndex];
      --preIndex;
    }
    arr[preIndex+1] = current;
  }
}

// function mergeSort(arr) {
//   function merge(left, right) {
//     let result = [];
//     while(left.length && right.length) {
//       if (left[0] <= right[0]) {
//         result.push(left.shift());
//       } else {
//         result.push(right.shift());
//       }
//     }
//     while (left.length) result.push(left.shift());
//     while (right.length) result.push(right.shift());
//     return result;
//   }
//   var len = arr.length;
//   if(len < 2) {
//       return arr;
//   }
//   var middle = Math.floor(len / 2),
//       left = arr.slice(0, middle),
//       right = arr.slice(middle);
//   return merge(mergeSort(left), mergeSort(right));
// }

function mergeSort(arr) { 
  // 归并排序
  function merge(left, right){
    // 归并排序子函数
    var result = [];
    // console.time('归并排序耗时');
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
  
    while (left.length) result.push(left.shift());
  
    while (right.length) result.push(right.shift());
    // console.timeEnd('归并排序耗时');
    return result;
  }
  var len = arr.length;
  if(len < 2) {
      return arr;
  }
  var middle = Math.floor(len / 2),
      left = arr.slice(0, middle),
      right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

let arr = [1,4,3,5,2,4,6,2,1];
// bubbleSort(arr);
// selectSort();
// insertSort();
mergeSort(arr);
console.log(arr);
