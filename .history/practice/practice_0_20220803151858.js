function man() {
  return function Fn(job, time) {
    new Promise(function (resolve, reject){
      time = time ? time : 0
      console.log(job);
      setTimeout(() => {
        resolve();
        return Fn;
      }, time)
    })
  }
}

const peter = man();
// 子类在链式调用之前会先收集所有的调用函数，按照顺序放入队列中，收集完成后顺序执行
peter('work')('sleep', 1000)('work')('sleep', 1000)
