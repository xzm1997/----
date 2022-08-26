Array.myMap = function (fn) {
  let res = []; 
  for (let i = 0; i < this.length; ++i) {
    this[i] = fn(this[i], i, this);
  }
}
