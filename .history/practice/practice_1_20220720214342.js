const currying = function(fn) {
  let args = [];
  return function temp(...newArgs) {
    if (newArgs.length) {
      args = args.concat(newArgs);
    } else {

    }
  }
}

const add = function (arr) {
  arr.reduce((a, b) => a + b);
}

let func = currying(add);
console.log(func(1,2,3)(4,5)());
