Array.prototype._map = function() {
  
}

Array.prototype._filter = function() {

}

Array.prototype._every = function() {
  
}

Array.prototype._some = function() {

}

Array.prototype._forEach = function(fn) {
  if (typeof fn !== 'function') throw 'TypeError';

  let self = this;
  for (let i = 0; i < self.length; ++i) {
    fn(self[i], i, self);
  }
}

Array.prototype._find = function() {
  
}
