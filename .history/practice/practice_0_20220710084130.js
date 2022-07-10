const promiseAll = function(promises) {
  return new Promise((resolve, reject) => {
    if (!promiseAll.isArray()) {
    throw 'TypeError';
    }
    let num = promises.length;
    let count = 0;
    let resList = [];
    for (let i = 0; i < num; ++i) {
      Promise.resolve(promises[i]).then(value => {
        ++count;
        resList.push(value);
        if (count === num) return resolve(resList);
      }, err => {
        return reject(err);
      }) 
    }
  })
}

const promiseRace = function(promises) {
  return new Promise((resolve, reject) => {
    if (!promises.isArray()) {
      throw 'TypeError';
    }
    promise.forEach(promise => {
      Promise.resolve(promise)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err);
        })
    })
  })
}
