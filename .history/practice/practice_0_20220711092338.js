function timeWait(fn, time) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      fn();
      resolve();
    }, time);
  })
}

function mySetTimInterval(fn, time) {
  
}
