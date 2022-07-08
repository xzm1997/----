let stepPromise = (color, time) => new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(color)
    resolve();
  }, time)
})

const runPromise = function() {
  stepPromise('red', 1000)
    .then(() => stepPromise('yellow', 2000))
    .then(() => stepPromise('green', 3000))
    .then(() => runPromise())
}

runPromise();
