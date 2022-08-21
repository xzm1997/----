Promise.all = function() {

}

Promise.allSettled = function() {
  
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
