const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class Promise {
  constructor(executor) {
    // init

    const resolve = function (value) {
      // 终止条件
      // 递归调用
      // 状态改变
      // 逐个执行
    }

    const reject = function (reason) {
      // 终止条件
      // 状态改变
      // 逐个执行
    }
  }

  then(onFulfilled, onRejected) {

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


