Promise.all = function (promises) {
  if (promises instanceof Array) {
    throw 'TypeError';
  }

  return new Promise((resolve, reject) => {
    let res = [], count = 0;
    for (let i = 0; i < promises.length; ++i) {
      promises[i].then(value => {
        res[i] = value;
        ++count;
        if (count === promises.length) {
          resolve(res);
        }
      }, reason => {
        reject(reason);
      })
    }
  })
}
