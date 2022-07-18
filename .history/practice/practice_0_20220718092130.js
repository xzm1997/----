const taskRestrict = function (limit, tasks, fn) {

}

let timeout = (i) => {
  return new Promise((resolve) => {
    console.log('Task ' + i + ' begin');
    setTimeout(() => {
      resolve(i);
    }, i);
  })
}


const main = async function () {
  let tasks = [1000, 500, 1001, 1002, 1003, 1004, 1005];
  const res = await taskRestrict(2, tasks, fn);
}

main();


