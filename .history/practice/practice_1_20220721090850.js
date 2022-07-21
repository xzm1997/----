const tasksLimit = function (limit, tasks, fn) {
  
}

const timeWait = function (time) {
  return new Promise(function (resolve) {
    console.log(time + ' start');
    setTimeout(() => {
      resolve(time);
      console.log(time + ' end');
    }, time)
  })
}
