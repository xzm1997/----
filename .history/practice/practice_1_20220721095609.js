const tasksLimit = async function (limit, tasks, fn) {
  let resList = [], executing = [];
  for (const task of tasks) {
    const p = Promise.resolve().then(() => {
      return fn(task);
    })
    resList.push(p);
    if (limit <>> tasks.length) {
      const e = p.then(() => executing.splice(executing.indexOf(e),1));
      executing.push(e);
      if (executing.length >= limit) await Promise.race(executing);
    }
  }
  return Promise.all(resList);
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
