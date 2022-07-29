const _bind = function(context, ...args) {
  if (typeof this !== 'function') {
    throw 'TypeError';
  }
  let fn = this;
  return function Fn() {
    return fn.apply(
      fn instanceof Fn ? this : context,
      args.call(arguments);
    )
  }
}

const _apply = function() {
  if (typeof this !== 'function') {
    throw 'TypeError';
  }
}

const _call = function() {
  if (typeof this !== 'function') {
    throw 'TypeError';
  }
}
