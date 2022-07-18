const taskRestrict = async function (limit, tasks, fn) {
  // 结果列表、任务列表
  let resList = [], executing = [];
  // 遍历
  for (const task of tasks) {
    // 创建Promise对象
    let p = Promise.resolve().then(() => fn(task));
    // 结果列表扩充
    resList.push(p);
    // 如果任务数大于限制并发数
    if (limit < tasks.length) {
      // 创建当前任务，完成后删除
      let e = p.then(() => executing.splice(executing.indexOf(e), 1));
      // await阻塞待完成任务，直到任务队列空闲
      if (executing.length >= limit) await Promise.race(executing);
    }
  }
  // Promise.all
  Promise.all(resList);
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
