const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class MyPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = null;
    this.reason = null;
    this.resolveList = [];
    this.rejectList = [];

    const resolve = function(value) {
      setTimeout(() => {
        this.status = FULFILLED;
        this.value = value;
        this.resolveList.forEach(callback => {
          callback(value);
        })
      }, 0)
    }
    const reject = function(reason) {
      setTimeout(() => {
        this.status = REJECTED;
        this.reason = reason;
        this.rejectList.forEach(callback => {
          callback(reason);
        })
      }, 0)
    }

    try {
      executor(resolve, reject);
    } catch(err) {
      reject(err);
    }
  }

  then(onFulFilled, onRejected) {
    if (typeof onFulFilled !== 'function') {
      onFulFilled = function() {
        return onFulFilled;
      }
    }
    if (typeof onRejected !== 'function') {
      onRejected = function() {
        throw onRejected;
      }
    }

    if (this.status === PENDING) {
      this.resolveList.push(onFulFilled);
      this.rejectList.push(onRejected);
    }
    if (this.status === FULFILLED) {
      onFulFilled(this.value);
    }
    if (this.status === REJECTED) {
      onRejected(this.reason);
    }
  }
  all(promises) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        throw 'TypeError';
      }
      let count = 0, res = [];
      for (const p of promises) {
        Promise.resolve(p).then(value => {
          res.push(value);
          ++count;
          if (count === promises.length) {
            return resolve(res);
          }
        }, reason => {
          return reject(reason);
        })
      }
    })
  }
  race(promises) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        throw 'TypeError';
      }
      for (const p of promises) {
        Promise.resolve(p).then(value => {
          return resolve(value);
        }, reason => {
          return
        })
      }
    })
  }
}
