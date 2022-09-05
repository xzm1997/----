let k = 2;
let arr = [1,6,7,8,9], rest = [], res;

arr.sort((a,b) => b-a);

while (true) {
  let sum = arr.reduce((a,b) => a+b);
  if (arr[0] < sum/arr.length*k) {
    res = arr.length
    break;
  } else {
    rest.push(arr.shift());
  }
}

console.log(rest)

while (true) {
  let sum = rest.reduce((a,b) => a+b);
  if (rest[rest.length-1] < sum/rest.length*k) {
    res = res < rest.length ? rest.length : res
    break;
  } else {
    rest.shift();
  }
}

console.log(res);
