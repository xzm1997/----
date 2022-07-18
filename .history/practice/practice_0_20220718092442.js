const taskRestrict = function (limit, tasks, fn) {
  let resList = [], executingList = [];
  for (const task of tasks) {
    const p = Promise.resolve().then(() => {
      return fn(item);
    })
  }
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
  let tasks = [1000, 500, 1001, 1002, 1003, 1004, 1005];
  const res = await taskRestrict(2, tasks, fn);
  console.log('res: ' + res);
}

main();
