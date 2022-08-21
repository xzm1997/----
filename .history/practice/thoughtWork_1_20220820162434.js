function findPairs(array, k) {
  let res = 0;
  for (let i = 0; i < array.length-1; ++i) {
      for (let j = i + 1; j < array.length; ++j) {
          if ((array[i] + array[j]) % k === 0) {
              ++res;
          }
      }
  }
  return res;
}

console.log(findPairs())
