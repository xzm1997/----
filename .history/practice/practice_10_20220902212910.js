Array.myMap = function (fn) {
  let res = [];
  for (let i = 0; i < this.length; ++i) {
    res[i] = fn(this[i], i, this);
  }
  return res;
}
