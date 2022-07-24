const debounce = function (fn, wait) {
  let timer = null;
  return function () {
    let context = this;
    let args = [...arguments];
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  }
}

const throttle = function () {

}


// Test debounce
// const testDebounce = debounce(() => {
//   console.log('debounce')
// }, 1000)

// testDebounce();
// setTimeout(() => {
//   testDebounce()
// }, 500);


// Test throttle
const testThrottle = throttle(() => {
  console.log('Test Throttle');
}, 1000)
