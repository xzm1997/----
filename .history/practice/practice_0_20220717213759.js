const step = (light, wait, callback) => {
  console.log(light);
  setTimeout(() => {
    callback();
  }, wait);
}

const run = () => {
  step('red', 1000, () => {
    step('yellow', 2000, () => {
      step('green', 3000, () => {
        run();
      })
    })
  })
}

run();
