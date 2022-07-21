const currying = function(fn) {
  let args = [];
  return function temp(...newArgs) {
    if (newArgs.length) {
      args = args.concat(newArgs);
      return temp;
    } else {
      let res = fn.apply(this, args);
      args = [];
      return res;
    }
  }
}

const add = function (arr) {
  return arr.reduce((a, b) => a + b);
}

let func = currying(add);
console.log(func(1,2,3)(4,5)());
