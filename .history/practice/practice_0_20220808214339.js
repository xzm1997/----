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
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      --preIndex;
    }
    arr[preIndex + 1] = current;
  }
}

let arr = [1,4,3,5,2,4,6,2,1];
// bubbleSort(arr);
// selectSort();
insertSort();
console.log(arr);
