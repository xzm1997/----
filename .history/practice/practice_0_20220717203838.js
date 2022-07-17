const debounce = function(fn, wait) {
  let timer = null;
  return function temp() {
    const context = this;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {

    }, wait);
  }
}

const throttle = function(fn, wait) {
  
}
