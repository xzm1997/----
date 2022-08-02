const debounce = function(fn, wait) {
  return function() {
    
  }
}

const throttle = function(fn) {
  
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
