const tasksLimit = async function(limit, fn, tasks) {
  let res = [], executing = [];
  for (const task of tasks) {
    let p = Promise.resolve().then(() => fn(task));
    res.push(p);
    if (limit < tasks.length) {
      let e = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e);
      if (executing.length >= limit) await Promise.race(executing);
    }
  }
  return Promise.all(res);
}

function timeWait (time) {
  return new Promise(function(resolve, reject) {
    console.log('task ' + wait + ' begin');
    setTimeout(() => {
      resolve(time);
    }, time)
  })
}

let tasks = [1000, 500, 1001,10002,1003,1004]
async function main(fn, tasks) {
  let res = await tasksLimit(2, fn, tasks)
  console.log(res);
}

main(timeWait, tasks);
