const taskRestrict = function (limit, tasks, fn) {

}

let timeout = (i) => {
  return new Promise((resolve) => {
    setTimeout(resolve, i, i);
  })
}

let tasks = [1000, 500, 1001, 1002, 1003, 1004, 1005];
taskRestrict(tasks);
