const step = function() {
  let status = 0;
  return function temp() {
    setTimeout(() => {
      console.log(status);
      status = status ? 1 : 0;
      return temp();
    })
  }
}

let run = step();
run();
