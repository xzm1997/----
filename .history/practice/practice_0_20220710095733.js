let add = function(...args) {
  return args.reduce((a, b) => a + b);
}

let currying = function(fn) {
  let args = [];
  return function temp(newArgs) {
    if (newArgs.length) {
      args = args.concat(newArgs);
      return temp;
    } else {
      let val = fn.apply(this, args);
      args = [];
      return val;
    }
  }
}


let curry = currying(add);
console.log(curry(1)(2,3,4)(5)());
console.log(curry(1)(2)(3)(4)(5)());
