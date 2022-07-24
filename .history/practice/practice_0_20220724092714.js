Promise.race = function(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) throw 'TypeError';
    for (const p of promises) {
      Promise.resolve().then((resolve, reject) => {
        
      })
    }
  })
}

Promise.all = function(promises) {

}
