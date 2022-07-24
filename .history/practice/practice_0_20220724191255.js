const debounce = function (fn, wait) {
  let timer = null;
  return function () {
    
  }
}

const throttle = function () {

}


// Test debounce
const testDebounce = function() {
  debounce(() => {
    console.log('debounce')
  }, 1000)
}

testDebounce();
setTimeout(() => {
  testDebounce()
}, 500);
