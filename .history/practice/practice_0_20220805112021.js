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
      // 如果 value 是一个promise，那我们的库中应该也要实现一个递归解析
      if (value instanceof Promise) {
        return value.then(resolve, reject);
      }
      this.status = FULFILLED;
      this.result = value;
      setTimeout(() => {
        this.resolveList.forEach(function(callback) {
          callback(value);
        })
      }, 0)
    }

    const reject = function(reason) {
      if (this.status !== PENDING) return;
      this.status = REJECTED;
      this.result = reason;
      setTimeout(callback => {
        callback(reason);
      })
    }

    try {
      executor(resolve, reject)
    } catch(e) {
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
      let callback = (type) => {
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
        } catch(e) {
          reject(e);
        }
      }
      if (this.status === FULFILLED) {
        setTimeout(() => {
          callback(onFulfilled);
        });
      }
      if (this.status === REJECTED) {
        setTimeout(() => {
          callback(onRejected);
        })
      }
      if (this.status === PENDING) {
        this.resolveList.push(() => {
          callback(onFulfilled);
        });
        this.rejectList.push(() => {
          callback(onRejected);
        })
      }
    })
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  finally(onSettled) {
    
  }
}
