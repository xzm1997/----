let n=5,k=3,x=5;
let arr = [4,3,11,2,1]

while (k > 0) {
  --k;
  let max = Math.max(...arr);
  let index = arr.indexOf(max);
  arr[index] -= x;
}

console.log(Math.max(...arr))
