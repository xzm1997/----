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

    }

    const reject = function(reason) {
      
    }
  }

  then() {

  }

  finally() {

  }

  all() {

  }

  race() {

  }
}
