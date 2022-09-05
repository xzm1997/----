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
      if (this.PromiseState !== PENDING) return;
      this.status = FULFILLED;
      this.result = value;
      setTimeout(() => {
        this.resolveList.forEach(callback => {
          callback(value);
        })
      })
    }

    const reject = function(reason) {
      if (this.PromiseState !== PENDING) return;
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
    } catch (e) {
      reject(e);
    }
  }

  then (onFulfilled, onRejected) {
    if (typeof onFulfilled !== 'function') {
      onFulfilled = function(value) {
        return value;
      }
    }
    if (typeof onRejected !== 'function') {
      onRejected = function(reason) {
        throw reason;
      }
    }
    return new Promise((resolve, reject) => {
      const callback = function(type) {
        try {
          let res = type(this.result);
          if (res instanceof Promise) {
            res.then(v => {
              resolve(v);
            }, r => {
              reject(r);
            })
          } else {
            resolve(res);
          }
        } catch (e) {
          reject(e);
        }
      }

      if (this.status === PENDING) {
        this.resolveList.push(() => {
          callback(onFulfilled);
        })
        this.rejectList.push(() => {
          callback(onRejected);
        })
      }
      if (this.status === FULFILLED) {
        setTimeout(() => {
          
        })
      }
      if (this.status === REJECTED) {

      }
    })

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
