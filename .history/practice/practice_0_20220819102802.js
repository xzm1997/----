function add(...args) {
  args.reduce((a, b) => a + b);
}

function currying(fn) {
  let args = [];
  return function F(...newArgs) {
    if (newArgs.length !== 0) {
      args = args.concat(newArgs);
      return F;
    } else {
      
    }
  }
}
