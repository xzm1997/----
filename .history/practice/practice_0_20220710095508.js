let add = function(...args) {
  return reduce((a, b) => a + b);
}

let currying = function(fn) {
  let args = [];
  return function temp(newArgs) {
    if (newArgs.length) {
      args = args
    } else {

    }
  }
}
