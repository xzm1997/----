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
        return value.then(resolve, reject);
      }
      this.status = FULFILLED;
      this.result = value;
      setTimeout(() => {
        this.resolveList.forEach(function(callback) {
          callback(value);
        })
      }, 0)
    }

    const reject = function(reason) {

    }

    try {

    } catch(e) {

    }
  }

  then(onFulfilled, onRejected) {

  }
}
