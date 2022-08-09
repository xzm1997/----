function bubbleSort() {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = i+1; j < arr.length; ++j) {
      if (arr[j] < arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
}

function selectSort(arr) {
  for (let i = 0; i < arr.length; ++i) {
    let min = arr[i], minIndex = i;
    for (let j = i+1; j < arr.length; ++j) {
      if (arr[j] < min) {
        min = arr[j];
        minIndex = j;
      }
    }
    if (i !== j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
}


let arr = [1,4,3,5,2,4,6,2,1];
// bubbleSort(arr);
selectSort();
console.log(arr);
