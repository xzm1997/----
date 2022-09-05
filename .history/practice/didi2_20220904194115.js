let k = 2;
let arr = [3, 10, 5, 4, 2], rest = [], res;

arr.sort((a,b) => b-a);

while (true) {
  let sum = arr.reduce((a,b) => a+b);
  if (arr[0] < sum/arr.length*k) {
    console.log(arr.length)
    break;
  } else {
    rest.push(arr.shift());
  }
}
