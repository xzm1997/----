Function.prototype.myBind = function(context) {
  return function Fn() {
    return this.apply(context, ...arguments);
  }
}
