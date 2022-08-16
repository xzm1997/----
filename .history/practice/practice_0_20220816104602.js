const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class Promise {
  constructor(executor) {
    this.status = PENDING;
    this.result = null;
    this.resolveList = [];
    this.rejectList = [];

    const resolve = function(value) {
      if (this.status !== PENDING) return;
      if (value instanceof Promise) {
        value.then(resolve, reject);
      }

      this.status = FULFILLED;
      this.result = value;
      setTimeout(() => {
        this.resolveList.forEach(callback => {
          callback(value);
        })
      }, 0)
    }

    const reject = function(reason) {

    }

    try {

    } catch(err) {

    }
  }

  then(onFulfilled, onRejected) {

  }

  catch(err) {

  }

  finally(fn) {

  }

  static resolve(value) {

  }

  static reject(reason) {

  }

  static all(promises) {

  }

  static race(promises) {

  }
}
