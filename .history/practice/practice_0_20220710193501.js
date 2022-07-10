const step = function(light, time, callback) {
  setTimeout(() => {
    console.log(light)
    callback();
  }, time)
}

const run = function() {
  step('red', 1000, function() {
    step('yellow', 2000, function() {
      step('green', 3000, run);
    })
  })
}

run();
