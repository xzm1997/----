Promise.then = function(onFulfilled, onRejected) {
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
        let res = type(this.result)
      } catch(e) {
        reject(e);
      }
    }

    if (this.status === PENDING) {

    }
    if (this.status === FULFILLED) {

    }
    if (this.status === REJECTED) {
      
    }
  })
}
