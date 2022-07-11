const step = function() {
  let status = 0;
  return function temp() {
    setTimeout(() => {
      console.log(status);
      status = status ? 0 : 1;
      return temp();
    }, 1000)
  }
}

let run = step();
run();
