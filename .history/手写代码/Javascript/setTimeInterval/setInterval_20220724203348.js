function mySetInterval (fn, time, ...rest) {
  setTimeout(() => {
    fn();
    mySetInterval(fn, time);
  }, time)
}


mySetInterval(() => {
  console.log(1);
}, 1000)
