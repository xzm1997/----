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
      return Promise.reject(reason);
    })
  }
}

var promise1 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 500, 'one');
});

var promise2 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then(function(value) {
console.log(value);
// Both resolve, but promise2 is faster
});
