// setTimeInterval

// 闭包
function myTimeInterval_0(fn, wait) {
  return function F () {
    setTimeout(() => {
      fn();
      F();
    }, wait);
  }
}


// Promise
