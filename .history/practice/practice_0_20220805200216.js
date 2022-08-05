const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class _Promise {
  constructor(executor) {
    // init
    this.status = PENDING;
    this.result = null;

    this.resolveList = [];
    this.rejectList = [];
    // resolve
    const resolve = function(value) {
      if (value instanceof Promise) {

      }
      
    }
    // reject
    const reject = function() {

    }
    
    try {

    } catch(err) {

    }
  }

  then() {

  }

  finally() {

  }

  static resolve() {

  }

  static reject() {

  }

  static all() {

  }

  static race() {

  }
}
