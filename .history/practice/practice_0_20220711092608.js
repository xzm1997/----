function timeWait(fn, time) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      fn();
      resolve();
    }, time);
  })
}

async function mySetTimInterval(fn, time) {
  timeWait(fn, time)
  wait mySetTimInterval(fn, time);
}


mySetTimInterval(() => {
  console.log('1')
},1000);
