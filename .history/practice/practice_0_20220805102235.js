let arr = [1,2,0,1,3,2,1,2,4,0,2,1,0];

let i = 0, j = arr.length - 1;
while (i < j) {
  while (i < j && arr[j] === 0) --j;
  while (i < j && arr[i] !== 0) ++i;
  [arr[i], arr[j]] = [arr[j], arr[i]];
  ++i;
}

console.log(arr);
