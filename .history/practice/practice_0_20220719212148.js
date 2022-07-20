function myApply(context, ...args) {
  if (typeof this !== 'function') throw 'TypeError';

  args = args.length ? args : null;
  context = context ? context : window;
  context.fn = this;
  let res = context.fn(...args);
  delete context.fn;
  return res;
}
