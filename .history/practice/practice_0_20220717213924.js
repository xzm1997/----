const step = (light, wait) => new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(light);
  }, wait)
})
