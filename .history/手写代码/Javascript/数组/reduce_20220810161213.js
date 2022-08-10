function myReduce(arr, fn, initNum) {
  let num = initNum ? initNum : 0;
  for (let i = 0; i < arr.length; ++i) {
    num = fn(num, arr[i], i);
  }
  return num;
}

let res = myReduce([1,2,3,4], (a, b) => {
  return a + b;
},1)

console.log(res);
