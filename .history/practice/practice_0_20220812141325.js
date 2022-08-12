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

    }

    const reject = function(reason) {

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
