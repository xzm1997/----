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
  let timer = null;
  return function () {
    const context = this;
    const args = [...arguments];
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(context, args);
        timer = null;
      })
    }
  }
}


// let debounceTest = debounce(() => {
//   console.log('debounce');
// }, 1000);

// setTimeout(() => {
//   debounceTest();
// }, 0);
// setTimeout(() => {
//   debounceTest();
// }, 500);
