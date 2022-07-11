function timeWait(fn, time) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      fn();
      resolve();
    }, time);
  })
}

mySetTimInterval = async (fn, time) => {
  timeWait(fn, time)
  await mySetTimInterval(fn, time);
}


mySetTimInterval(() => {
  console.log('1')
},1000);
