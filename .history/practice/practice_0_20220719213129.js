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
  
}
