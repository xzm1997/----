let arr = [1,4,2,3,5], k = 2;

arr.sort((a,b) => b-a);

let max = 0;
for (let i = 0; i < arr.length; ++i) {
  let count = 0;
  for (let j = i + 1; j < arr.length; ++j) {
    if ((arr[i] - arr[j]) % k === 0) ++count;
  }
  max = count > max ? count : max;
}
