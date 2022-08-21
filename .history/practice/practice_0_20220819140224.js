function add(...args) {
  console.log(args);
  return args.reduce((a, b) => a + b);
}

function currying(fn) {
  let args = [];
  return function F(...newArgs) {
    if (newArgs.length !== 0) {
      args = args.concat(newArgs);
      return F;
    } else {
      let res = fn(...args)
      args = [];
      return res;
    }
  }
}


let curryAdd = currying(add);
console.log(curryAdd(1,2,3)(4,5,6)());
console.log(curryAdd(1)(2)(3)(4)(5)());
