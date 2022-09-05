let k = 2;
let arr = [3, 10, 5, 4, 2], rest = [], res;

arr.sort((a,b) => b-a);


while (true) {
  let sum = rest.reduce((a,b) => a+b);
  if (rest[rest.length-1] < sum/rest.length*k) {
    res = res < rest.length ? rest.length : res
    break;
  } else {
    rest.shift();
  }
}
