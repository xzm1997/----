const step = (fn, time) => new Promise((resolve, reject) => {
  setTimeout(() => {
    fn();
    resolve();
  }, time)
})

const run = async function(fn, time, num) {
  while (num) {
    await step(fn, time);
    --num;
  }
}

run(() => {
  console.log(1);
}, 1000, 5)
