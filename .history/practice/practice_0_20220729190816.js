const tasksLimit = async function(limit, fn, tasks) {
  let res = []
}

function timeWait (time) {
  return new Promise(function(resolve, reject) {
    console.log(time);
    setTimeout(() => {
      resolve(time);
    })
  })
}

let tasks = [1000, 500, 1001,10002,1003,10004]
async function main(fn, tasks) {
  let res = await tasksLimit(2, fn, tasks)
  console.log(res);
}

main(fn, tasks);
