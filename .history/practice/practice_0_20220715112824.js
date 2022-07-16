const add = function(...args) {
  return args.reduce((a, b) => a + b);
}

const currying = function(fn) {
  let args = [];
  return function temp(...newArgs) {
    if (newArgs.length) {
      args.push(...newArgs);
      return temp;
    } else {
      let res = fn(...args);
      args = [];
      return res;
    }
  }
}

let addCurry = currying(add)
console.log(addCurry(1)(2)(3)(4, 5)())  //15
console.log(addCurry(1)(2)(3, 4, 5)())  //15
console.log(addCurry(1)(2, 3, 4, 5)())  //15
