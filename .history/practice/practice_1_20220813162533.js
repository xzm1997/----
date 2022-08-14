const throttle = function(fn, wait) {
  let timer = null;
  return function() {
    let context = this;
    let args = arguments;
    let first = true;
    if (first) fn.apply(context, arguments);
    if (!timer) {
      setTimeout(function() {
        if (!first) {
          fn.apply(context, arguments);
        }
        timer
      })
    }
    
  }
}
