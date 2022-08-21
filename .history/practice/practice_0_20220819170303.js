Promise.all = function() {

}

Promise.allSettled = function(promises) {
  let res = [], count = 0;
  for (let i = 0; i < promises.length; ++i) [
    Promise.resolve(promises[i]).then(value => {

    }).catch()
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
