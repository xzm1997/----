const debounce = function(fn, delay) {
  let timer = null;
  return function () {
    let context = this;
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(function() {
      fn();
    }, delay);
  }
}

const throttle = function(fn, delay) {

}
