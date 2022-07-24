function mySetTimeInterval(fn, wait, times) {
  return function temp() {
    if (!times) return;
    setTimeout(() => {
      --times;
      fn();
      temp();
    }, wait);
  }
}

mySetTimeInterval(() => {
  console.log(1);
}, 1000, 8)()
