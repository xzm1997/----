Function.prototype.myBind = function(context) {
  let args = [...arguments].slice(1), fn = this;
  return function Fn() {
    return fn.apply(context, args.concat(...arguments));
  }
}
