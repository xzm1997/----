const step = function(light, time, callback) {
  setTimeout(() => {
    console.log(light)
    callback();
  }, time)
}
