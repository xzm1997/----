Array.myMap = function (fn) {
  if (typeof fn !== 'function') throw 'TypeError';
  let res = []; 
  for (let i = 0; i < this.length; ++i) {
    res[i] = fn(this[i], i, this);
  }
  return res;
}

Array.myForEach = function(fn) {
  if (typeof fn !== 'function') throw 'TypeError';
  for (let i = 0; i < this.length; ++i) {
    fn(this[i], i, this);
  }
}
