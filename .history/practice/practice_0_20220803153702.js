class Man {
  constructor() {
    this.queue = [];
    setTimeout(() => {
      this.run();
    }, 0);
  }

  run() {
    const fn = this.queue.shift();
    fn && fn();
  }

  sleep() {
    this.queue.push(() => {
      console.log('sleep start');
      setTimeout(() => {
        console.log('sleep end');
        this.run();
      }, delay);
    })
    return this;
  }

  work() {
    this.queue.push(() => {
      console.log('working');
      this.run();
    });
    return this;
  }
}

const man = new Man();
// 子类在链式调用之前会先收集所有的调用函数，按照顺序放入队列中，收集完成后顺序执行
man.work().sleep(1000).work().sleep(1000);
