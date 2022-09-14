let arr = [6,5,4,3,2];

let max = 0;

for (let i = 0; i < arr.length; ++i) {
  let res = 1, index = i-1;
  while (index >= 0 && arr[index] < arr[index+1]) {
    ++res;
    --index;
  }
  index = i+1;
  while (index < arr.length && arr[index] < arr[index-1]) {
    ++res;
    ++index;
  }
  max = max > res ? max : res;
}

console.log(max);
