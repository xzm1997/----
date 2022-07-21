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

let tasks = [1000, 500, 1001, 1002, 1003, 1004, 1005];
