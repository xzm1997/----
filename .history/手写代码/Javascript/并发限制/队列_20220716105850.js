// 队列
class Queue {
  constructor() {
    this._queue = [];
  }
  push(value) {
    return this._queue.push(value);
  }
  shift() {
    // TODO 优化出队操作 shift 操作的时间复杂度为 O(n)。使用 reverse + pop 的方式，引入双数组的设计，减低时间复杂度类O(1)
    return this._queue.shift();
  }
  isEmpty() {
    return this._queue.length === 0;
  }
}

// 延迟任务
class DelayedTask {
  constructor(resolve, fn, args) {
    this.resolve = resolve;
    this.fn = fn;
    this.args = args;
  }
}

// 任务池
class TaskPool {
  constructor(size) {
    this.size = size;
    this.queue = new Queue();
  }

  addTask(fn) {
    return (...args) => {
      return new Promise((resolve) => {
        this.queue.push(new DelayedTask(resolve, fn, args));
        if (this.size) {
          this.size--;
          const {
            resolve: taskResolve,
            fn: taskFn,
            args: taskArgs,
          } = this.queue.shift();
          taskResolve(this.runTask(taskFn, taskArgs));
        }
      });
    };
  }
  
  pullTask() {
    if (this.queue.isEmpty()) {
      return;
    }
    if (this.size === 0) {
      return;
    }
    this.size--;
    const { resolve, fn, args } = this.queue.shift();
    resolve(this.runTask(fn, args));
  }

  runTask(fn, args) {
    const result = Promise.resolve(fn(...args));
    result.finally(() => {
      this.size++;
      this.pullTask();
    });
    return result;
  }
}
