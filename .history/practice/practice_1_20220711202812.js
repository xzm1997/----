const step = function() {
  let status = 0;
  return function temp() {
    console.log(status);
    status = status ? 1 : 0;
    return step();
  }
}

let run = step();
run();
