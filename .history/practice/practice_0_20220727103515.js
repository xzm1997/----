const _bind = function(context, ...rest) {
  if (typeof this !== 'function') throw 'TypeError';

  let args = rest, fn = this;
  return function Fn() {
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    )
  }
}

const _apply = function(context, args) {
  if (typeof this !== 'function') throw 'TypeError';
  let fn
}
