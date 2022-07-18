const step = (light, wait, callback) => {
  console.log(light);
  setTimeout(() => {
    callback();
  }, wait);
}

const run = () => {

}

run();
