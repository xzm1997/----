const debounce = function(fn, delay) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    setTimeout(function() {
      fn();
    }, delay);
  }
}

const throttle = function(fn, delay) {

}
