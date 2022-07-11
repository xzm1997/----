const step = function(num) {
  let n = num
  return function(fn, time) {
    if (!n) return;
    setTimeout(() => {
      fn();
      step(fn, time, n-1);
    }, time);
  }
}


