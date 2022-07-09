const debounce = function(fn, wait) {
  let timer = null;
  return new function() {
    let context = this;
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(function() {
      
    })
  }
}

const throttle = function(fn, wait) {

}
