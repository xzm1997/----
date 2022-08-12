Array.prototype._map = function(fn) {
  if (typeof fn !== 'function') throw 'TypeError';
  let res = [];
  let self = this;
  for (let i = 0; i < self.length; ++i) {
    let resTemp = fn(self[i], i, self);
    res[i] = resTemp;
  }
}

Array.prototype._filter = function(fn) {
  if (typeof fn !== 'function') {
    throw 'TypeError';
  }
  let res = [];
  let self = this
  for (let i = 0; i < self.length; ++i) {
    if (fn(self[i], i, self)) {
      res.push(self[i]);
    }
  }
  return res;
}

Array.prototype._every = function(fn) {
  if (typeof fn !== 'function') throw 'TypeError';
  let self = this;
  for (let i = 0; i < self.length; ++i) {
    if (!fn(self[i], i, self)) {
      return false;
    }
  }
  return true;
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
