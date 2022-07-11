const step = function(fn, wait, num) {
  return function temp() {
    if (!num) return;
    setTimeout(() => {
      fn();
      --num;
    }, wait);
  }
}

let run = step(5);
run();
