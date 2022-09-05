const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';


class Promise {
  constructor(executor) {
    this.status = PENDING;
  }
}
