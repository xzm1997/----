class myPromise {
  constructor(executor) {

  }
  
  then(onFulfilled, onRejected) {
    if (typeof onFulfilled !== 'function') {

    }
    if (typeof onRejected !== 'function') {

    }

    return new Promise((resolve, reject) => {
      const callback = function(type) {
        try {
          let res = type(this.result);
          if (res instanceof Promise) {
            res.then(v => {
              resolve(v);
            }, r => {
              reject(r);
            })
          } else {
            resolve(res);
          }
        } catch (e) {
          reject(e);
        }
      } 
      if (this.status === PENDING) {
        this.resolveList.push(function() {
          
        })
      }
      if (this.status === FULFILLED) {

      }
      if (this.status === REJECTED) {

      }
    })
  }
}
