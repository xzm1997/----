function mySetTimeInterval(fn, wait, times) {
  return function temp() {
    setTimeout(fn, wait);
    --times;
    return temp;
  }
}

mySetTimeInterval(() => {
  console.log(1);
}, 1000, 8);
