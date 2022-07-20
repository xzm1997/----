function myApply(context, args) {
  if (typeof this !== 'function') throw 'TypeError';
  context = context ? context: window;
  context.fn = this;
  let res = context.fn(...args);
  delete context.fn;
  return res;
}

function myCall(context, ...args) {

}

function myBind(context) {
  if (typeof this !== 'function') throw 'TypeError';
  let args = [...arguments].slice(1), fn = this;
  return function Fn() {
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments);
    )
  }
}
