function mySetinterval (fn, time) {
  setTimeout(() => {
    fn();
    mySetinterval(fn, time);
  }, time)
}

mySetinterval(() => {
  console.log(1);
}, 1000);
