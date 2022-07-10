function add(...args) {
  return reduce((a, b) => a + b);
}

function currying(fn) {
  args = []
  return function temp(...newArgs) {
    if (newArgs.length) {
      args.push(newArgs);
      return temp;
    } else {
      let res = fn.apply(this, args);
      args = [];
      return res;
    }
  }
}

const fn = currying(add);
console.log(fn(1)(2)(3,4)(5)());
console.log(fn(1,2,3,4,5)());
console.log(fn(1,2)(3,4,5)());
