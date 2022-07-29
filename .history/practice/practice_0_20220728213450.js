const _bind = function(context, ...args) {
  if (typeof this !== 'function') {
    throw 'TypeError';
  }
  let fn = this;
  return function Fn() {
    return fn.apply(
      this instanceof Fn ? this : context,
      args.call(arguments)
    )
  }
}

const _apply = function(context, args) {
  if (typeof this !== 'function') {
    throw 'TypeError';
  }
  let context = context || window;
  context.fn = this;
  let res = context.fn(...args);
  delete context.fn;
  return res;

}

const _call = function() {
  if (typeof this !== 'function') {
    throw 'TypeError';
  }
}
