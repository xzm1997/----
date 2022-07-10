const step = async function (light, time) {
  setTimeout(() => {
    console.log(light);
  }, time)
}

const run = function () {
  step('red', 1000)
  await step()
}

run();
