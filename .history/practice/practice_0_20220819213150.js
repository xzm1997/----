Promise.all = function() {

}

Promise.allSettled = function(promises) {
  let res = [], count = 0;
  for (let i = 0; i < promises.length; ++i) [
    Promise.resolve(promises[i]).then(value => {
      res[i] = {
        status: 'fulfilled',
        value: promises[i]
      }
      ++count;
      if (count === promises.length) resolve(res);
    }).catch(val => {
      res[i] = {
        status: 'rejected',
        value: promises[i]
      }
      ++count;
      if (count === promises.length) resolve(res);
    })
  ]
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
      let res = type(this.result);
    }
  })
}
