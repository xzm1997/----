Array.prototype._forEach = function(fn) {
    for (let i = 0; i < this.length; ++i) {
      fn(this[i], i, this);
    }
}
