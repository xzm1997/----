class Man {
  constructor() {
    this.queue = [];  // 记录调用的函数,全部是同步收集然后依次执行
    this.index = 0;   // 执行函数的索引
    this.firstSleepWatch = false;   // 检查 firstSleep 调用次数,最多调用一次
    this.init();     
  }
	
  // 因为执行需要在函数收集之前，因此需要利用事件机制，先收集后执行
  init() {
    setTimeout(() => this.run() , 0);
  }

  run() {
    const fn = this.queue[this.index++];
    // 最后一个 fn 为 undefined, 因此需要做处理
    fn && fn();
  }

  firstSleep(delay) {
    if(this.firstSleepWatch) {
      throw Error("Already declared firstSleep!!");
    }
    this.queue.unshift(() => {
      setTimeout(() => {
        console.log('firstSleep end!!');
        this.run();
      }, delay);
    });
    this.firstSleepWatch = true;
    return this;
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
      console.log('work runing!!');
      this.run();
    });
    return this;
  }
};

const man = new Man();
// 子类在链式调用之前会先收集所有的调用函数，按照顺序放入队列中，收集完成后顺序执行
man.work().sleep(1000).firstSleep(5000).work().sleep(1000);
————————————————
版权声明：本文为CSDN博主「Ardor-Zhang」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_41800366/article/details/115703744
