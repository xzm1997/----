function findNum(arr) {
  arr.sort((a,b) => a-b);
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] !== i) return i;
  }
  return arr.length;
}

console.log(findNum([5,0,1,2,4]))
