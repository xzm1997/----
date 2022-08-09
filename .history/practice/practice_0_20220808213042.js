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
    for (let j = i+1; j < arr.length; ++j) {
      
    }
  }
}


let arr = [1,4,3,5,2,4,6,2,1];
// bubbleSort(arr);
console.log(arr);
