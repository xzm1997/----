function tasksRestrict(limit, tasks, fn) {
  // init
  let res = [], executing = [];
  // 遍历任务
  for (const task of tasks) {
    // 创建Promise对象，加入res
    let p = Promise.resolve().then(() => fn(task));
    // 判断并发限制
    if(true) {
      // 创建任务，完成后销毁
      // race
      // await 阻塞
    }
  }
  // all
}

function timeout(wait) {
  console.log('Task ', wait, ' begin');
  setTimeout(() => {
    resolve(i);
    console.log('Task ', wait, ' end');
  })
}

async function main() {
  let tasks = [1000, 500, 1001, 400, 1002, 1003, 1004, 1005];
  let res = await taskRestrict(2, tasks, timeWait);
  console.log('result is ' + res);
}

main();
