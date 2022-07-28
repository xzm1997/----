const myBind = function (context, ...args) {
  // 判断 this
  if (typeof this !== 'function') throw 'TypeError';
  // args，fn()
  fn = this;
  // 返回 Fn()
  return function Fn() {
    return fn.apply(
      this instanceof Fn ? this : context,
      args);
  }
}
