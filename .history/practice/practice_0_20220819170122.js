Promise.all = function() {

}

Promise.allSettled = function() {
  let res = [], count = 0;
  return new Promise((resolve, reject) => {
    
  })
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
