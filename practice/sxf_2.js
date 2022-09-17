function jhonRing(num, nth) {
  ++nth;
  let arr = [];
  for (let i = 0; i < num; ++i) {
    arr[i] = i;
  }
  // 数组长度大于nth
  while (arr.length >= nth) {
    let newArr = [];
    let times = arr.length - arr.length%nth;
    newArr = arr.slice(times);
    arr.slice(0, times).map((item, index) => {
      if ((index + 1) % nth !== 0) {
        newArr.push(item)
      }
    })
    arr = newArr;
  }
  // 数组长度小于nth
  while (arr.length > 1) {
    let index = nth % arr.length - 1;
    let newArr = arr.slice(index+1).concat(arr.slice(0, index));
    arr = newArr;
  }
  return arr[0];
}

console.log(jhonRing(100, 10));
