const debounce = function(fn, wait) {
  let timer = null;
  return function() {
    let context = this;
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(fn => {
      fn.apply(context, args);
    }, wait);
  }
}

const throttle = function(fn, wait) {
  let timer = null;
  return function() {
    let context = this;
    let args = arguments;
    if (!timer) {
      setTimeout(() => {
        fn.apply(context, args);
      }, wait)
    }
  }
}

function testDebounce() {
  let fnTest = debounce(() => {
    console.log('Test debounce')
  }, 1000);

  setTimeout(fnTest, 0);
  setTimeout(fnTest, 500);
}

function testThrottle() {
  let fnTest = throttle(() => {
    console.log('Throttle test');
  }, 1000);
  setTimeout(fnTest, 0);
  setTimeout(fnTest, 500);
}

// testDebounce();
testThrottle()
