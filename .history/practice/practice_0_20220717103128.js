const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class MyPromise {
  executor() {
    this.status = PENDING;
    this.value = null;
    this.reason = null;
  }
}
