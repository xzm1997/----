const step = function (light, wait) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(light);
    }, wait)
  })
}

const run = function() {
  step('red', 1000)
    .then(() => step('yellow', 2000))
    .then(() => step('green', 3000))
    .then(() => run());
}

run();
