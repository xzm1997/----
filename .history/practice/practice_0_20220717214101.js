const step = (light, wait) => new Promise((resolve, reject) => {
  console.log(light);
  setTimeout(() => {
    resolve();
  }, wait)
})

const run = function () {
  step('red', 1000)
    .then(() => step('yellow', 2000))
    .then(() => step('green', 3000))
    .then(() => run)
}
