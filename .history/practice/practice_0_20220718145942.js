const taskRestrict = async function (limit, tasks, fn) {
  // 结果列表、任务列表
  // 遍历
  for (const task of tasks) {
    // 创建Promsise对象
    // 结果列表扩充
    // 如果任务数大于限制并发数
    if (true) {

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
