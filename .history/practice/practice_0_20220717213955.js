const step = (light, wait) => new Promise((resolve, reject) => {
  console.log(light);
  setTimeout(() => {
    resolve();
  }, wait)
})

const run = function () {

}
