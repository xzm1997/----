function add(arr) {
  return arr.reduce((a,b) => a+b);
}

function currying(fn) {
  let args = [];
  return function F(...newArgs) {
    let context = this;
    if (newArgs.length) {
      args = args.concat(newArgs);
      return F;
    } else {
      let res = fn.apply(context, args);
      args = [];
      return res;
    }
  }
}
