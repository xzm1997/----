function myReduce(arr, fn, initNum) {
  let num = initNum ? initNum : 0;
  for (let i = 0; i < arr.length; ++i) {
    num = fn(num, arr[i], i)
  }
}
