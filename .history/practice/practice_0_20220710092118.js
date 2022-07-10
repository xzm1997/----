function add(...args) {
  return args.reduce((a, b) => a + b);
}

function furry(fn) {
  let args = [];
  return function temp(...newArgs) {
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
