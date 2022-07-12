function debounce(fn, delay) {
  let timer = null;
  return function() {
    let context = this;
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  }
}

const throttle = function(fn, wait) {
  let timer = null;
  return function() {
    let context = this;
    let args = arguments;
    if (!timer) {
      timer = setTimeout(function() {
        fn().apply(context, args);
      },wait);
    }
  }
}
