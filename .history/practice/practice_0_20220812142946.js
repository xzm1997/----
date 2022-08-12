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

      this.status = REJECTED;
      this.result = reason;
      setTimeout(() => {
        this.rejectedList.forEach(callback => {
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
      let callback = (type) => {
        try {
          let result = type(this.result);
          if (result instanceof Promise) {
            this.result.then(value => {
              resolve(value)
            }, reason => {
              reject(reason);
            })
          } else {
            resolve(result);
          }
        } catch(err) {
          reject(err);
        }
      }

      if (this.status === PENDING) {
        this.resolveList.push(() => {
          callback(onFulfilled)
        });
        this.rejectedList.push(() => {
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

  finally() {

  }

  all() {

  }

  race() {

  }
}
