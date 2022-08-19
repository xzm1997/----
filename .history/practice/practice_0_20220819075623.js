function add(...arr) {
  return arr.reduce((a, b) => a+b);
}

function currying(fn) {
  let args = [];
  return function F(...newArgs) {
    if (newArgs.length) {
      args = args.concat(...newArgs);
      return F;
    } else {
      let val = fn.apply(this, args);
      args = []
      return val;
    }
  }
}


let addCurry = currying(add)
console.log(addCurry(1)(2)(3)(4, 5)())  //15
console.log(addCurry(1)(2)(3, 4, 5)())  //15
console.log(addCurry(1)(2, 3, 4, 5)())  //15
