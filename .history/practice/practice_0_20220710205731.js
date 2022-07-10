function mySetinterval (fn, time) {
  setTimeout(() => {
    fn();
  }, time)
}

mySetinterval(() => {
  console.log(1);
}, 1000);
