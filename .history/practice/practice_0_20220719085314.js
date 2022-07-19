function tasksRestrict(limit, tasks, fn) {
  // init
  // 遍历任务
  for (const task of tasks) {
    
  }
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
