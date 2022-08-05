String.prototype._deal = function () {
  if (this.length <= 10) return this.toString();
  let front = this.slice(0, 5);
  let back = this.slice(this.length - 6);
  return front + '...' + back;
}


console.log('abcdefgasdsadas12345'._deal());
console.log('123456'._deal())
