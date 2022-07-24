Promise.race = function(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) throw 'TypeError';
    for (const p of promises) {
      Promise.resolve().then(value => {
        resolve(value);
      }, reason => {
        reject(reason);
      })
    }
  })
}

Promise.all = function(promises) {
  return Promise((resolve, reject) => {
    let index = 0, num = promises.length;
    let res = [];
    for (const p of promises) {
      Promise.resolve().then(value => {
        res.push(value);
        ++index;
        if (index === num) {
          resolve(res);
        }
      }, reason => {
        reject(reason);
      })
    }
  })
}


let promise0 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 0);
})
