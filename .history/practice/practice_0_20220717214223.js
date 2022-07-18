const step = (light, wait) => new Promise((resolve, reject) => {
  console.log(light);
  setTimeout(() => {
    resolve();
  }, wait)
})

const run = async function () {
  step('red', 1000);
  await step('yellow', 2000)
  await step('green', 3000)
  await run();
}

run();
