async function tasksRestrict(limit, tasks, fn) {
  // init
  let res = [], executing = [];
  // 遍历任务
  for (const task of tasks) {
    // 创建Promise对象，加入res
    let p = Promise.resolve().then(() => fn(task));
    res.push(p);
    // 判断并发限制
    if(limit < task.length) {
      // 创建任务，完成后销毁
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e);
      // race
      if (executing.length >= limit) await Promise.race(executing);
    }
  }
  // all
  return Promise.all(res);
}

function timeout(wait) {
  return Promise(function (resolve, reject) {
    console.log('Task ', wait, ' begin');
    setTimeout(() => {
      resolve(i);
      console.log('Task ', wait, ' end');
    })
  })
}

async function main() {
  let tasks = [1000, 500, 1001, 400, 1002, 1003, 1004, 1005];
  let res = await tasksRestrict(2, tasks, timeout);
  console.log('result is ' + res);
}

main();
