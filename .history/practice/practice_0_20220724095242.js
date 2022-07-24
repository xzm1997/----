Promise._race = function(promises) {
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

Promise._all = function(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      throw 'TypeError';
    }
    let index = 0, num = promises.length;
    let res = [];
    for (const p of promises) {
      Promise.resolve(p).then(value => {
        res.push(value);
        ++index;
        if (index === num) {
          return resolve(res);
        }
      }, reason => {
        return reject(reason);
      })
    }
  })
}


let promise0 = new Promise((resolve) => {
  setTimeout(resolve, 500, 0);
})

let promise1 = new Promise((resolve) => {
  setTimeout(resolve, 1500, 1);
})

let promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 700, 2);
})

Promise._all([promise0, promise1]).then(value => {
  console.log(value);
})
