const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class _Promise {
  constructor(executor) {
    this.status = PENDING;
    this.result = null;
    this.resolveList = [];
    this.rejectList = [];

    const resolve = function (value) {
      if (value instanceof Promise) {
        return value.then()
      }
    }

    const reject = function (reason) {

    }

    try {

    } catch(err) {

    }
  }

  then() {

  }
}
