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
    }

    try {

    } catch (e) {

    }
  }

  then(onFulfilled, onRejected) {

  }

  catch(err) {

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
