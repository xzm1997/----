const debounce = function(fn, wait) {
  let timer = null;
  return function temp() {
    const context = this;
    const args = [...arguments];
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
      timer = null;
    }, wait);
  }
}

const throttle = function(fn, wait) {
  
}
