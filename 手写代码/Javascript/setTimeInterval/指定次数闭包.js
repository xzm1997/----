const step = function(fn, wait, num) {
  return function temp() {
    if (!num) return;
    setTimeout(() => {
      fn();
      --num;
      temp();
    }, wait);
  }
}

let run = step(() => {
  console.log(1);
}, 1000, 8);
run();
