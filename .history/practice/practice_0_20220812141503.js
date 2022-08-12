const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class Promise {
  constructor(executor) {
    this.status = PENDING;
    this.result = null;
    this.resolveList = [];
    this.rejectedList = [];

    const resolve = function(value) {
      if (this.status !== PENDING) return;
      if (value instanceof Promise) {
        return value.then(resolve, reject);
      }
    }

    const reject = function(reason) {
      if (this.status !== PENDING) return;
    }

    try {
      executor(resolve, reject);
    } catch(err) {
      reject(err);
    }
  }

  then() {

  }

  finally() {

  }

  all() {

  }

  race() {

  }
}
