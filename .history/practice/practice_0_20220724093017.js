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

}
