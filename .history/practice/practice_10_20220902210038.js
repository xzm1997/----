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
      this.status = FULFILLED;
      this.result = value;

      setTimeout(() => {
        this.resolveList.forEach(callback => {
          callback(value);
        })
      })
    }

    const reject = function(reason) {

    }

    try {

    } catch (e) {

    }
  }

  then (onFulfilled, onRejected) {

  }

  finally (onSettled) {

  }

  all (promises) {

  }

  allSettled(promises) {

  }

  race (promises) {

  }

  resolve(value) {

  }
  reject(reason) {

  }
}
