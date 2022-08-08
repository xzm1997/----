const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class Promise {
  constructor(executor) {
    // init
    this.status = PENDING;
    this.result = null;
    this.resolveCallbacks = [];
    this.rejectCallbacks = [];

    const resolve = function (value) {
      // 终止条件
      if (this.status !== PENDING) return;
      // 递归调用
      if (value instanceof Promise) {
        value.then(resolve, reject);
      }
      // 状态改变
      
      // 逐个执行
    }

    const reject = function (reason) {
      // 终止条件
      // 状态改变
      // 逐个执行
    }

    try {

    } catch (err) {

    }
  }

  then(onFulfilled, onRejected) {
    // 值穿透
    // 返回Promise
  }

  catch(err) {

  }

  finally(onSettled) {

  }

  static resolve(value) {

  }

  static reject(reason) {

  }

  static all(promises) {

  }
}


