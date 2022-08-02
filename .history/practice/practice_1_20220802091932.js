const debounce = function(fn, wait) {

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
