const step = function(fn, time, num) {
  let n = num
  return function(fn, time) {
    if (!n) return;
    setTimeout(() => {
      fn();
      step(fn, time, num)
    }, time);
  }
}


