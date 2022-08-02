const memory = function(fn) {
  let res = 0;
  return function temp (num) {
    console.log(res);
  }
}


// 累加器
const add = function(num1, num2) {
  console.log(num1, num2, num1+num2);
  return num1+num2
}


