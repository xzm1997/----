const taskRestrict = async function (limit, tasks, fn) {
  let resList = [], executingList = [];
  for (const task of tasks) {
    const p = Promise.resolve().then(() => {
      return fn(task);
    })
    resList.push(p)
    if (limit < tasks.length) {
      const e = p.then(() => {
        return executingList.splice(executingList.indexOf(e), 1);
      })
      executingList.push(e)
      if (executingList.length >= limit) {
        await Promise.race(executingList);
      }
    }
  }
  return Promise.all(resList);
}

let timeout = (i) => {
  return new Promise((resolve) => {
    console.log('Task ' + i + ' begin');
    setTimeout(() => {
      console.log('Task ' + i + ' end');
      resolve(i);
    }, i);
  })
}


const main = async function () {
  let tasks = [1000, 500, 1001, 400, 1002, 1003, 1004, 1005];
  tasks = [310,510,1000,500,200,410,320,890]
  const res = await taskRestrict(2, tasks, timeout);
  console.log('res: ' + res);
}

main();

