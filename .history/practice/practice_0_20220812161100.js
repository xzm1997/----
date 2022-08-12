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
        value.then(value => {
          resolve(value);
        }, reason => {
          reject(reason);
        })
      }

      this.status = FULFILLED;
      this.result = value;
      setTimeout(() => {
        this.resolveList.forEach(callback => {
          callback(value);
        })
      }, 0);
    }

    const reject = function(reason) {
      if (this.status !== PENDING) return;

      this.status = FULFILLED;
      this.result = reason;
      setTimeout(() => {
        this.rejectList.forEach(callback => {
          callback(reason);
        })
      },0)
    }

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(onFulfilled, onRejected) {
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
      let callback = function(type) {
        try {
          let res = type(this.result);
          if (res instanceof Promise) {
            res.then(value => {
              resolve(value);
            }, reason => {
              reject(reason);
            })
          } else {
            resolve(res);
          }
        } catch (err) {
          reject(err);
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
          callback(onFulfilled);
        })
      }
      if (this.status === REJECTED) {
        setTimeout(() => {
          callback(onRejected);
        })
      }
    })
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  static resolve(value) {
    
  }

  static rejected(reason) {

  }

  static all(promises) {

  }

  static race(promises) {
    
  }
}
