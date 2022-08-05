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
