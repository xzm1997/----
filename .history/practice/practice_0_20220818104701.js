class Promise {
  constructor(executor) {

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

    return new Promise(function(resolve, reject) {
      const callback = function (type) {
        try {
          let result = type(this.result)
          if (result instanceof Promise) {
            
          }
        } catch(e) {
          reject(e);
        }
      }
    })
  }
}
