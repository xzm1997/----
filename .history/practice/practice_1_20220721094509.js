const tasksLimit = function (limit, tasks, fn) {
  let resList = [], executing = [];
  for (const task of tasks) {
    const p = 
  }
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
let res = tasksLimit(2, tasks, timeWait);
