const taskRestrict = async function (limit, tasks, fn) {
  let resList = [], executing = [];
  tasks.forEach(task => {
    const p = Promise.resolve().then(() => fn(task));
    resList.push(p);
  })
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

