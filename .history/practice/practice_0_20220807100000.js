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
      if (this.status !== PENDING) return;
      if (value instanceof Promise) {
        return value.then(resolve, reject)
      }
      this.status = FULFILLED;
      this.result = value;
      setTimeout(() => {
        this.resolveList.forEach(callback => {
          callback(value);
        })
      })
    }

    const reject = function (reason) {
      if (this.status !== PENDING) return;
      this.status = REJECTED;
      this.result = reason;
      setTimeout(() => {
        this.rejectList.forEach(callback => {
          callback(reason);
        })
      })
    }

    try {
      executor(resolve, reject);
    } catch(err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    if (typeof onFulfilled !== 'function') {
      onFulfilled = function (value) {
        return value;
      }
    }
    if (typeof onRejected !== 'function') {
      onRejected = function (reason) {
        throw reason;
      }
    }
    return new Promise((resolve, reject) => {
      let callback = (type) => {
        try {
          let result = type(this.result);
          if (result instanceof Promise) {
            result.then(value => {
              resolve(value);
            }, reason => {
              reject(reason);
            })
          } else {
            resolve(result)
          }
        } catch(e) {
          reject(e);
        }
      }
      if (this.status === FULFILLED) {
        setTimeout(() => {
          callback(onFulfilled);
        })
      }
      if (this.status === REJECTED) {
        setTimeout(() => {
          callback(onRejected);
        })
      }
      if (this.status === PENDING) {
        this.resolveList.push(function() {
          callback(onFulfilled);
        })
        this.rejectList.push(function() {
          callback(onRejected);
        })
      }
    })
  }
}
