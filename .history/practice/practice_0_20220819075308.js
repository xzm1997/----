function add(arr) {
  arr.reduce((a, b) => a+b);
}

function currying(fn) {
  let args = [];
  return function F(...newArgs) {
    if (newArgs.length) {
      args.concat(newArgs);
      return F;
    } else {
      
    }
  }
}
