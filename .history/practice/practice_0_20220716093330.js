Promise.myAll = function(Promises) {
  if (!Array.isArray(Promises)) {
    throw 'TypeError';
  }

  let count = 0, res = [];
  Promises.forEach((promise) => {
    Promise.resolve(promise).then(value => {
      count++;
      res.push(value);
    }, reason => {

    })
  })
}
