function  mySetTimeInterval(fn, wait) {
  setTimeout(() => {
    fn();
    mySetTimeInterval(fn, wait)
  }, wait)
}

mySetTimeInterval(() => {
  console.log(1);
}, 1000);
