const step = function(fn, wait, num) {
  return function temp() {
    if (!num) return;
    setTimeout(() => {
      fn();
      --num;
    }, wait);
  }
}

let run = step(() => {
  console.log(1);
}, 1000, 8);
run();
