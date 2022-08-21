Promise.all = function() {

}

Promise.allSettled = function(promises) {
  let res = [], count = 0;
  promises.forEach(function() {
    
  })
}

Promise.finally = function(fn) {
  return this.then(data => {
    fn();
    return data;
  }, reason => {
    fn();
    throw reason;
  })
}

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
        let res = type(this.result);
        if (res instanceof Promise) {
          res.then(res => {
            resolve(res);
          }, rea => {
            reject(rea);
          })
        } else {
          resolve(res);
        }
      } catch(e) {
        reject(e);
      }
    }
    if (this.status === PENDING) {
      this.resolveList.push(callback(onFulfilled));
      this.rejectList.push(callback(onRejected));
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
