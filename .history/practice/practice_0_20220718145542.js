const taskRestrict = async function (limit, tasks, fn) {
  let resList = [], executing = [];
  for (const task of tasks) {
    const p = Promise.resolve().then(() => fn(task));
    resList.push(p);
    if (limit < tasks.length) {
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
    }
  }
}

const timeWait = function (wait) {
  return new Promise(function (resolve, reject) {
    console.log('task ' + wait + ' begin');
    setTimeout(() => {
      console.log('task ' + wait + ' end');
      resolve(wait)
    }, wait)
  })
}

const main = async function () {
  let tasks = [1000, 500, 1001, 400, 1002, 1003, 1004, 1005];
  let res = await taskRestrict(2, tasks, timeWait);
  console.log('result is ' + res);
}

main();
