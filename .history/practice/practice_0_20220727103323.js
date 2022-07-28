const _bind = function(context, ...rest) {
  if (!Array.isArray(this)) throw 'TypeError';

  let args = rest, fn = this;
  return function Fn() {
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    )
  }
}
