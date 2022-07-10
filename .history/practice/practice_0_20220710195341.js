const step = function (light, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(light);
      resolve
    }, time)
  })

}

const run = async function () {
  step('red', 1000)
  await step()
}

run();
