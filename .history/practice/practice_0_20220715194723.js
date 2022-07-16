class Man {
  constructor() {
    this.queue = [];  // 记录调用的函数,全部是同步收集然后依次执行
    this.index = 0;   // 执行函数的索引
    this.init();     
  }
	
  // 因为执行需要在函数收集之前，因此需要利用事件机制，先收集后执行
  init() {
    setTimeout(() => this.run() , 0);
  }

  run() {
    const fn = this.queue.shift();
    // 最后一个 fn 为 undefined, 因此需要做处理
    fn && fn();
  }

  sleep(delay) {
    this.queue.push(() => {
      setTimeout(() => {
        console.log('sleep end!!');
        this.run();
      }, delay);
    });
    return this;
  }

  work() {
    this.queue.push(() => {
      console.log('work running!!');
      this.run();
    });
    return this;
  }
};

const man = new Man();
// 子类在链式调用之前会先收集所有的调用函数，按照顺序放入队列中，收集完成后顺序执行
man.work().sleep(1000).work().sleep(1000);
