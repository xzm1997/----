const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class _Promise {
  constructor(executor) {
    // init
    this.status = PENDING;
    this.result = null;

    this.resolveList = [];
    this.rejectList = [];
    // resolve
    const resolve = function(value) {
      if (this.PromiseState !== PENDING) return;
      if (value instanceof Promise) {
        return value.then(resolve, reject);
      }

    }
    // reject
    const reject = function() {
      if (this.PromiseState !== PENDING) return;
    }
    
    try {

    } catch(err) {

    }
  }

  then() {

  }

  finally() {

  }

  static resolve() {

  }

  static reject() {

  }

  static all() {

  }

  static race() {

  }
}
