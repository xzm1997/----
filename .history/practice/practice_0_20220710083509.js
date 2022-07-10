const promiseAll = function(promises) {
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
}

const promiseRace = function(promises) {
  if (!promises.isArray()) {
    throw 'TypeError';
  }
  promises.forEach(() => {
    
  })
}
