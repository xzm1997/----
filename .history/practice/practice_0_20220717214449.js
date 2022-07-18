const step = (light, wait) => new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(light);
    resolve();
  }, wait)
})

const run = async function () {
  await step('red', 1000);
  await step('yellow', 2000);
  await step('green', 3000);
  run();
}

run();
