const throttle = function(fn, wait) {
  let timer = null;
  return function() {
    let context = this;
    let args = arguments;
    let first = true;
    if (first) {
      fn.apply(context, args);
      first = false;
    }
    if (!timer) {
      timer = setTimeout(function() {
        if (!first) {
          fn.apply(context, args);
        }
        timer = null;
        first = true;
      }, wait)
    }
    
  }
}
