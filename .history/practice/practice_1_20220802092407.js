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

const throttle = function(fn) {
  let timer = null;
  return function() {
    let context = this;
    let args = arguments;
    if (!timer) {

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
  
}

// testDebounce();
