Promise.myAll = function(promises) {
  if (!Array.isArray(Promises)) {
    throw 'TypeError';
  }

  let count = 0, res = [];
  for (const p of promises) {
    Promise.resolve(p).then(value => {
      ++count;
      res.push(value);
      if (count === promises.length) {
        return Promise.resolve(res);
      }
    }, reason => {
      return Promise.reject(err);
    })
  }
}
