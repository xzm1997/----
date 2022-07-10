const step = function (light, wait) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(light);
    }, wait)
  })
}

const run = function() {

}

run();
